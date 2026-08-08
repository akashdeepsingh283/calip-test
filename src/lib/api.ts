const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!BACKEND_URL) {
  throw new Error(
    "Missing NEXT_PUBLIC_BACKEND_URL environment variable. " +
    "Set it in .env or Vercel project settings."
  );
}

export const chatApi = {
  async sendMessage(message: string, sessionId: string) {
    let response: Response;
    try {
      response = await fetch(`${BACKEND_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, sessionId }),
      });
    } catch {
      throw new Error("Network error. Please check your connection.");
    }

    let data: unknown;
    try {
      data = await response.json();
    } catch {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      throw new Error("Invalid response from server.");
    }

    if (!response.ok) {
      const message =
        (data && typeof data === "object" && "message" in data
          ? (data as Record<string, unknown>).message
          : null) ||
        `Request failed with status ${response.status}`;
      throw new Error(message as string);
    }

    return data;
  },
};
