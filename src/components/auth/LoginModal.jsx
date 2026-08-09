"use client";

import { useState } from "react";
import { X, Mail, Wallet, LogIn, User, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function LoginModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { loginWithEmail, loginWithWallet } = useAuth();

  if (!isOpen) return null;

  async function handleEmailSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await loginWithEmail(email, password);
      onClose();
      // Reset form
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  }

  async function handleWalletConnect() {
    setError("");
    setLoading(true);

    try {
      // Check if MetaMask is installed
      if (typeof window !== "undefined" && window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length > 0) {
          await loginWithWallet(accounts[0]);
          onClose();
        }
      } else {
        // Fallback to mock for demo
        await loginWithWallet("0x" + Array(40).fill(0).map(() => 
          "abcdef1234567890"[Math.floor(Math.random() * 16)]
        ).join(""));
        onClose();
      }
    } catch (err) {
      setError("Failed to connect wallet");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0d0d14] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            {isLogin ? "Welcome back" : "Create account"}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Sign in to access your dashboard
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2 rounded-xl bg-white/5 p-1">
          <button
            onClick={() => setActiveTab("email")}
            className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
              activeTab === "email"
                ? "bg-primary text-white shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Mail className="h-4 w-4" />
            Email
          </button>
          <button
            onClick={() => setActiveTab("metamask")}
            className={`flex-1 flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
              activeTab === "metamask"
                ? "bg-primary text-white shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Wallet className="h-4 w-4" />
            MetaMask
          </button>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Email Tab */}
        {activeTab === "email" && (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Password
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <>
                  {isLogin ? "Sign In" : "Create Account"}
                  <LogIn className="h-4 w-4" />
                </>
              )}
            </button>

            <p className="text-center text-sm text-muted-foreground">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-primary hover:underline"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </form>
        )}

        {/* MetaMask Tab */}
        {activeTab === "metamask" && (
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Wallet className="h-5 w-5 text-primary-glow" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Connect MetaMask
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Connect your wallet to sign in securely. We'll request
                    access to your wallet address.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleWalletConnect}
              disabled={loading}
              className="w-full rounded-xl bg-[#f5841f] py-3 text-sm font-semibold text-white transition-all hover:bg-[#e0761a] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21.5 6l-9-4-9 4 9 4 9-4zm-9 3.5l-6.5 3 1.5-5.5 5-2.5 5 2.5 1.5 5.5zm-5.5 2l2-7.5 2 7.5h-4zm11.5-7.5l2 7.5h-4l-2-7.5z" />
                  </svg>
                  Connect MetaMask
                </>
              )}
            </button>

            <p className="text-center text-xs text-muted-foreground">
              By connecting, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </div>
        )}
      </div>
    </div>
  );
}