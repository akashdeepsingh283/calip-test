"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";
import { chatApi } from "../../lib/api";

const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const sessionIdRef = useRef(
    `sess_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
  );

  const openChat = useCallback(() => setIsOpen(true), []);
  const closeChat = useCallback(() => setIsOpen(false), []);
  const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);

  const sendMessage = useCallback(
    async (text) => {
      if (!text.trim() || isLoading) return;

      const userMsg = {
        id: `msg_${Date.now()}`,
        role: "user",
        content: text.trim(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);

      try {
        const res = await chatApi.sendMessage(text.trim(), sessionIdRef.current);
        const assistantMsg = {
          id: `msg_${Date.now()}_resp`,
          role: "assistant",
          content: res.reply || "",
          source: res.source,
          intent: res.intent,
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: `msg_${Date.now()}_err`,
            role: "assistant",
            content:
              "I'm having trouble connecting right now. Please try again in a moment.",
            isError: true,
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading]
  );

  return (
    <ChatContext.Provider
      value={{
        isOpen,
        openChat,
        closeChat,
        toggleChat,
        messages,
        sendMessage,
        isLoading,
        setMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
}
