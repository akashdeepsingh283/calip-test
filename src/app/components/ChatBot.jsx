"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  X,
  Minus,
  Send,
  Sparkles,
  Bot,
  User,
  ChevronDown,
} from "lucide-react";
import { useChat } from "../context/ChatContext";
import { useLenis } from "./SmoothScroll";

function ChatMarkdown({ content }) {
  const lines = content.split("\n");
  const elements = [];
  let inCodeBlock = false;
  let codeLines = [];
  let codeLanguage = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre key={`code-${i}`} className="chat-code-block">
            <code>{codeLines.join("\n")}</code>
          </pre>
        );
        codeLines = [];
        inCodeBlock = false;
        codeLanguage = "";
      } else {
        inCodeBlock = true;
        codeLanguage = line.slice(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (line.trim() === "") {
      elements.push(<div key={`spacer-${i}`} className="h-2" />);
      continue;
    }

    const trimmed = line.trim();
    if (trimmed.startsWith("•") || trimmed.startsWith("- ")) {
      const text = trimmed.replace(/^[•-]\s*/, "");
      elements.push(
        <div key={`li-${i}`} className="chat-list-item">
          <span className="chat-bullet" />
          <span>{renderInline(text)}</span>
        </div>
      );
      continue;
    }

    elements.push(
      <p key={`p-${i}`} className="chat-paragraph">
        {renderInline(line)}
      </p>
    );
  }

  if (inCodeBlock && codeLines.length > 0) {
    elements.push(
      <pre key="code-trailing" className="chat-code-block">
        <code>{codeLines.join("\n")}</code>
      </pre>
    );
  }

  return <div className="chat-markdown">{elements}</div>;
}

function renderInline(text) {
  const parts = [];
  let remaining = text;

  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/;
  const boldRegex = /\*\*([^*]+)\*\*/;
  const italicRegex = /\*([^*]+)\*/;
  const codeRegex = /`([^`]+)`/;

  while (remaining.length > 0) {
    const linkMatch = remaining.match(linkRegex);
    const boldMatch = !linkMatch && remaining.match(boldRegex);
    const italicMatch = !linkMatch && !boldMatch && remaining.match(italicRegex);
    const codeMatch =
      !linkMatch && !boldMatch && !italicMatch && remaining.match(codeRegex);

    const nextMatch = linkMatch || boldMatch || italicMatch || codeMatch;
    if (!nextMatch) {
      parts.push(remaining);
      break;
    }

    if (nextMatch.index > 0) {
      parts.push(remaining.slice(0, nextMatch.index));
    }

    if (linkMatch) {
      parts.push(
        <a
          key={`link-${parts.length}`}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="chat-link"
        >
          {linkMatch[1]}
        </a>
      );
    } else if (boldMatch) {
      parts.push(
        <strong key={`bold-${parts.length}`}>{boldMatch[1]}</strong>
      );
    } else if (italicMatch) {
      parts.push(
        <em key={`italic-${parts.length}`}>{italicMatch[1]}</em>
      );
    } else if (codeMatch) {
      parts.push(
        <code key={`code-${parts.length}`} className="chat-inline-code">
          {codeMatch[1]}
        </code>
      );
    }

    remaining = remaining.slice(nextMatch.index + nextMatch[0].length);
  }

  return parts;
}

function TypingIndicator() {
  return (
    <div className="flex items-start gap-3 px-5 py-2" aria-label="AI is typing">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
        <Bot className="h-4 w-4 text-primary-glow" />
      </div>
      <div className="flex items-center gap-1.5 rounded-2xl glass px-4 py-3">
        <span className="chat-typing-dot" style={{ animationDelay: "0s" }} />
        <span className="chat-typing-dot" style={{ animationDelay: "0.15s" }} />
        <span className="chat-typing-dot" style={{ animationDelay: "0.3s" }} />
      </div>
    </div>
  );
}

const quickQuestions = [
  "What is Calip.io?",
  "How do Startup Tokens work?",
  "How can I invest?",
  "Is Calip secure?",
];

function WelcomeScreen({ onQuestionClick }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
      <div className="welcome-icon flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20 mb-5">
        <Sparkles className="h-8 w-8 text-primary-glow" />
      </div>
      <h2 className="text-xl font-semibold font-display text-foreground">
        Welcome to Calip AI
      </h2>
      <p className="mt-2 max-w-xs text-sm text-muted-foreground leading-relaxed">
        Ask anything about startups, tokenized startup opportunities, platform
        features, and investing.
      </p>
      <div className="mt-6 flex flex-col gap-2 w-full max-w-xs">
        {quickQuestions.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => onQuestionClick(q)}
            className="welcome-question group flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-left text-sm text-muted-foreground transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 hover:text-primary-glow"
            style={{ animationDelay: `${0.1 + quickQuestions.indexOf(q) * 0.06}s` }}
          >
            <span className="flex-1">{q}</span>
            <Send className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ChatBot() {
  const {
    isOpen,
    closeChat,
    messages,
    sendMessage,
    isLoading,
  } = useChat();
  const [inputValue, setInputValue] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [internalOpen, setInternalOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const lenisCtx = useLenis();
  const stop = lenisCtx?.stop;
  const start = lenisCtx?.start;
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    setInternalOpen(isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (internalOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [internalOpen, isMinimized]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (!internalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isMinimized) {
          setIsMinimized(false);
        } else {
          closeChat();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [internalOpen, isMinimized, closeChat]);

  useEffect(() => {
    if (internalOpen) {
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scroll-y", `${scrollY}px`);
      document.documentElement.classList.add("menu-open");
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      stop();
    } else {
      document.documentElement.classList.remove("menu-open");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      start();
      const scrollY = parseInt(
        document.documentElement.style.getPropertyValue("--scroll-y") || "0"
      );
      document.documentElement.style.removeProperty("--scroll-y");
      window.scrollTo(0, scrollY);
    }
    return () => {
      document.documentElement.classList.remove("menu-open");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      start();
    };
  }, [internalOpen, stop, start]);

  const handleSubmit = useCallback(
    (e) => {
      e?.preventDefault();
      if (!inputValue.trim() || isLoading) return;
      sendMessage(inputValue);
      setInputValue("");
    },
    [inputValue, isLoading, sendMessage]
  );

  const handleQuickQuestion = useCallback(
    (q) => {
      sendMessage(q);
    },
    [sendMessage]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeChat();
    }
  };

  return (
    <>
      {internalOpen && (
        <>
          <div
            className="chat-backdrop fixed inset-0 z-[60] bg-black/30 hidden md:block"
            onClick={handleBackdropClick}
            aria-hidden="true"
          />

          {/* Mobile: fullscreen modal */}
          <div
            className="chat-panel chat-panel--mobile fixed inset-0 z-[70] flex flex-col md:hidden"
            style={{
              background: "rgba(10, 10, 15, 0.98)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Calip AI Chat"
            data-chat-portal="true"
          >
            <div className="flex items-center justify-between px-4 pt-12 pb-3 border-b border-white/[0.06] shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-4 w-4 text-primary-glow" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Calip AI</div>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="online-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-[11px] text-emerald-400/80">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeChat}
                className="flex h-9 w-9 items-center justify-center rounded-full glass text-muted-foreground hover:text-foreground transition-all duration-200 hover:bg-white/10"
                aria-label="Close chat"
              >
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>

            <MessageList
              messages={messages}
              isLoading={isLoading}
              onQuickQuestion={handleQuickQuestion}
              messagesEndRef={messagesEndRef}
            />

            <ChatInputForm
              inputValue={inputValue}
              setInputValue={setInputValue}
              handleSubmit={handleSubmit}
              handleKeyDown={handleKeyDown}
              isLoading={isLoading}
              inputRef={inputRef}
            />
          </div>

          {/* Desktop: floating panel */}
          <div
            ref={panelRef}
            className="chat-panel chat-panel--desktop fixed bottom-6 right-6 z-[70] hidden md:flex flex-col overflow-hidden"
            data-chat-portal="true"
            style={{
              width: "420px",
              height: isMinimized ? "64px" : "700px",
              maxHeight: "calc(100vh - 48px)",
              overscrollBehavior: "contain",
              borderRadius: "24px",
              background: "rgba(12, 12, 20, 0.96)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow:
                "0 0 0 1px rgba(139, 124, 255, 0.05), 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 80px rgba(139, 124, 255, 0.08)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Calip AI Chat"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] shrink-0 cursor-pointer"
              onClick={() => isMinimized && setIsMinimized(false)}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20">
                  <Sparkles className="h-4 w-4 text-primary-glow" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Calip AI</div>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="online-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-[11px] text-emerald-400/80">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMinimized(!isMinimized);
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full glass text-muted-foreground hover:text-foreground transition-all duration-200 hover:bg-white/10"
                  aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeChat();
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full glass text-muted-foreground hover:text-foreground transition-all duration-200 hover:bg-white/10"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <MessageList
                  messages={messages}
                  isLoading={isLoading}
                  onQuickQuestion={handleQuickQuestion}
                  messagesEndRef={messagesEndRef}
                />

                <ChatInputForm
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  handleSubmit={handleSubmit}
                  handleKeyDown={handleKeyDown}
                  isLoading={isLoading}
                  inputRef={inputRef}
                />
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

function MessageList({ messages, isLoading, onQuickQuestion, messagesEndRef }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto scroll-smooth"
      style={{ scrollBehavior: "smooth", overscrollBehavior: "contain" }}
    >
      {messages.length === 0 ? (
        <WelcomeScreen onQuestionClick={onQuickQuestion} />
      ) : (
        <div className="flex flex-col gap-1 py-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chat-message flex items-start gap-3 px-5 py-2 ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.role === "assistant" && (
                <div className="flex h-8 w-8 shrink-0 mt-1 items-center justify-center rounded-full bg-primary/10">
                  <Bot className="h-4 w-4 text-primary-glow" />
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20"
                    : msg.isError
                    ? "glass border border-red-500/20 text-red-300"
                    : "glass"
                }`}
              >
                <ChatMarkdown content={msg.content} />
              </div>
              {msg.role === "user" && (
                <div className="flex h-8 w-8 shrink-0 mt-1 items-center justify-center rounded-full bg-primary/15">
                  <User className="h-4 w-4 text-primary-glow" />
                </div>
              )}
            </div>
          ))}
          {isLoading && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
}

function ChatInputForm({
  inputValue,
  setInputValue,
  handleSubmit,
  handleKeyDown,
  isLoading,
  inputRef,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="shrink-0 border-t border-white/[0.06] px-4 py-3"
    >
      <div className="relative flex items-center gap-2">
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about startups, tokens, platform features..."
            disabled={isLoading}
            className="chat-input w-full rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 disabled:opacity-50"
            aria-label="Message input"
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          disabled={!inputValue.trim() || isLoading}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-lg"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
