export default function SettingsCard({ className = "", children }) {
  return (
    <div
      className={`relative w-full rounded-[20px] border border-[#1c202e] bg-[#f4f5f7] ${className}`}
    >
      {children}
    </div>
  );
}
