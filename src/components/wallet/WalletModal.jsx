"use client";

import { useState } from "react";
import { X, Wallet, Check } from "lucide-react";
import Image from "next/image";

const walletOptions = [
  {
    id: "metamask",
    name: "MetaMask",
    icon: "/metamask-icon.svg",
    description: "Connect to your MetaMask wallet",
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    icon: "/walletconnect-icon.svg",
    description: "Scan with WalletConnect",
  },
  {
    id: "phantom",
    name: "Phantom",
    icon: "/phantom-icon.svg",
    description: "Connect to Phantom wallet",
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    icon: "/coinbase-icon.svg",
    description: "Connect to Coinbase",
  },
];

export default function WalletModal({ isOpen, onClose, onConnect }) {
  const [connecting, setConnecting] = useState(null);
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  function handleConnect(walletId) {
    setConnecting(walletId);
    
    // Simulate wallet connection
    setTimeout(() => {
      setConnecting(null);
      setConnected(true);
      // Generate a mock wallet address
      const mockAddress = "0x" + Array(40).fill(0).map(() => 
        "abcdef1234567890"[Math.floor(Math.random() * 16)]
      ).join("");
      setWalletAddress(mockAddress);
      onConnect && onConnect(mockAddress);
    }, 1500);
  }

  function handleClose() {
    setConnected(false);
    setWalletAddress("");
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-[320px] rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-xl">
      {!connected ? (
        <>
          <p className="mb-3 text-[13px] font-medium text-[#374151]">
            Select wallet provider
          </p>

          <div className="flex flex-col gap-2">
            {walletOptions.map((wallet) => (
              <button
                key={wallet.id}
                type="button"
                onClick={() => handleConnect(wallet.id)}
                disabled={connecting !== null}
                className="flex items-center gap-3 rounded-lg border border-[#e5e7eb] p-3 transition-colors hover:border-[#8b7cff] hover:bg-[#f9fafb] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-lg bg-[#f3f4f6]">
                  <Wallet className="h-5 w-5 text-[#6b7280]" strokeWidth={1.5} />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[14px] font-semibold text-[#1a1a2e]">
                    {wallet.name}
                  </p>
                </div>
                {connecting === wallet.id && (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#8b7cff] border-t-transparent" />
                )}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#10b981]">
            <Check className="h-6 w-6 text-white" strokeWidth={2.5} />
          </div>

          <p className="mt-3 text-[15px] font-semibold text-[#1a1a2e]">
            Connected
          </p>

          <div className="mt-2 flex items-center gap-2 rounded-lg bg-[#f9fafb] px-3 py-2">
            <Wallet className="h-3.5 w-3.5 text-[#8b7cff]" strokeWidth={1.5} />
            <code className="text-[13px] font-medium text-[#1a1a2e]">
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </code>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="mt-3 flex h-[38px] w-full items-center justify-center rounded-lg bg-[#8b7cff] text-[13px] font-medium text-white hover:bg-[#7a6bef]"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}
