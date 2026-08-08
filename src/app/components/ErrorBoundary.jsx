"use client";

import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error.message, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background px-6">
          <div className="max-w-md text-center">
            <h1 className="font-display text-2xl font-semibold text-foreground">Something went wrong</h1>
            <p className="mt-3 text-muted-foreground text-sm">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            <button
              onClick={() => { this.setState({ hasError: false, error: null }); window.location.reload(); }}
              className="mt-6 btn-primary-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
