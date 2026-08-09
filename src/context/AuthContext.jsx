"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored session on mount
    const stored = localStorage.getItem("calip_user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        localStorage.removeItem("calip_user");
      }
    }
    setLoading(false);
  }, []);

  const loginWithEmail = (email, password) => {
    // Mock email login - in production, this would call an API
    const userData = {
      id: "email_" + Date.now(),
      email,
      type: "email",
      name: email.split("@")[0],
    };
    setUser(userData);
    localStorage.setItem("calip_user", JSON.stringify(userData));
    return Promise.resolve(userData);
  };

  const loginWithWallet = (address) => {
    // Mock wallet login - in production, verify signature
    const userData = {
      id: "wallet_" + address.slice(0, 8),
      walletAddress: address,
      type: "wallet",
      name: address.slice(0, 6) + "..." + address.slice(-4),
    };
    setUser(userData);
    localStorage.setItem("calip_user", JSON.stringify(userData));
    return Promise.resolve(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("calip_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginWithEmail,
        loginWithWallet,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}