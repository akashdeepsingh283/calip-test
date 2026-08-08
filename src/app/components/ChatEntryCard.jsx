"use client";

import { Sparkles, SendHorizonal } from "lucide-react";
import { motion } from "framer-motion";
import { useChat } from "../context/ChatContext";

const suggestions = [
  { text: "What is Calip.io?", label: "What is Calip.io?" },
  { text: "How do Startup Tokens work?", label: "How Startup Tokens work?" },
  { text: "How can I invest?", label: "How can I invest?" },
  { text: "Is Calip secure?", label: "Is Calip secure?" },
  { text: "Join waitlist", label: "Join waitlist" },
];

export default function ChatEntryCard() {
  const { openChat, sendMessage } = useChat();

  const handleSuggestion = (text) => {
    openChat();
    setTimeout(() => sendMessage(text), 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className="group relative mt-8 w-full max-w-md"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-primary/20 hover:bg-white/[0.05]">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
        <div className="relative z-10 p-5">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-4 w-4 text-primary-glow" />
            </div>
            <span className="text-sm font-medium text-foreground">Ask Calip AI</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s.text}
                onClick={() => handleSuggestion(s.text)}
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-xs text-muted-foreground transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 hover:text-primary-glow"
              >
                {s.label}
                <SendHorizonal className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
