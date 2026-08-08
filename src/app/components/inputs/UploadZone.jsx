"use client";

import { useState, useRef, useId, useCallback } from "react";
import { Upload, X, FileText, Image as ImageIcon } from "lucide-react";

const MAX_SIZE_MB = 10;

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatAccept(accept) {
  if (!accept) return "";
  return accept
    .split(",")
    .map((a) => a.trim().replace("image/", "").replace("application/", "").toUpperCase())
    .join(", ");
}

export default function UploadZone({
  label,
  accept,
  multiple = false,
  onFiles,
  maxSizeMB = MAX_SIZE_MB,
  preview = false,
}) {
  const id = useId();
  const inputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const handleFiles = useCallback(
    (incoming) => {
      setError("");
      const valid = [];
      for (const f of incoming) {
        if (f.size > maxSizeMB * 1024 * 1024) {
          setError(`"${f.name}" exceeds ${maxSizeMB}MB limit.`);
          continue;
        }
        valid.push(f);
      }
      const updated = multiple ? [...files, ...valid] : valid.slice(0, 1);
      setFiles(updated);
      onFiles?.(updated);
    },
    [files, maxSizeMB, multiple, onFiles]
  );

  const removeFile = (index) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onFiles?.(updated);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const incoming = Array.from(e.dataTransfer.files);
    if (incoming.length) handleFiles(incoming);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const onDragLeave = () => setDragOver(false);

  const onBrowse = () => inputRef.current?.click();

  const onInputChange = (e) => {
    if (e.target.files.length) handleFiles(Array.from(e.target.files));
    e.target.value = "";
  };

  const hasImage = (f) => f.type.startsWith("image/");

  const getPreviewUrl = (f) => {
    if (preview && hasImage(f)) return URL.createObjectURL(f);
    return null;
  };

  return (
    <div className="space-y-3">
      <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
        {label}
      </span>

      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onClick={onBrowse}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onBrowse(); }}
        aria-label={`Upload ${label}`}
        className={[
          "upload-zone relative rounded-xl border-2 border-dashed transition-all duration-300 cursor-pointer",
          "flex flex-col items-center justify-center py-10 px-6 text-center",
          dragOver
            ? "border-primary/60 bg-primary/[0.06]"
            : "border-white/[0.12] bg-white/[0.02] hover:border-white/[0.2] hover:bg-white/[0.04]",
          error ? "border-red-400/50" : "",
        ].join(" ")}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={onInputChange}
          className="hidden"
          aria-hidden="true"
        />

        {files.length > 0 ? (
          <div className="w-full space-y-3">
            {files.map((f, i) => {
              const url = getPreviewUrl(f);
              return (
                <div
                  key={`${f.name}-${i}`}
                  className="flex items-center gap-3 rounded-lg bg-white/[0.04] px-4 py-3 text-left"
                >
                  {url ? (
                    <img
                      src={url}
                      alt={f.name}
                      className="h-10 w-10 rounded-lg object-cover ring-1 ring-white/[0.08]"
                    />
                  ) : (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                      <FileText className="h-5 w-5 text-primary-glow" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground truncate">{f.name}</p>
                    <p className="text-[11px] text-muted-foreground">{formatSize(f.size)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-muted-foreground hover:text-foreground hover:bg-white/[0.12] transition-colors"
                    aria-label={`Remove ${f.name}`}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/[0.1] ring-1 ring-primary/20 mb-4">
              <Upload className="h-5 w-5 text-primary-glow" aria-hidden="true" />
            </div>
            <p className="text-sm text-foreground font-medium">
              {label || "Upload files"}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Drag & drop or click to browse
              {accept && (
                <>
                  <br />
                  <span className="text-primary-glow/70">
                    {formatAccept(accept)}
                  </span>
                </>
              )}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full glass px-4 py-1.5 text-[11px] text-muted-foreground">
              <Upload className="h-3 w-3" aria-hidden="true" />
              Browse files
            </span>
            <p className="mt-3 text-[10px] text-muted-foreground/60">
              Max {maxSizeMB}MB per file
            </p>
          </>
        )}
      </div>

      {error && (
        <p
          className="error-message text-xs text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
