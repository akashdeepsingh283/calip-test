const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error(
    "Missing NEXT_PUBLIC_API_URL environment variable. " +
    "Set it in .env or Vercel project settings."
  );
}

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

async function request(endpoint, options = {}) {

  const url = `${API_URL.replace(/\/+$/, "")}/${endpoint.replace(/^\/+/, "")}`;

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const token = typeof window !== "undefined" ? localStorage.getItem("calip_token") : null;
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  let res;
  try {
    res = await fetch(url, {
      ...options,
      headers,
    });
  } catch {
    throw new ApiError("Network error. Please check your connection.", 0, null);
  }

  if (!res.ok) {
    let data;
    try {
      data = await res.json();
    } catch {
      data = null;
    }
    throw new ApiError(
      data?.message || data?.error || `Request failed with status ${res.status}`,
      res.status,
      data
    );
  }

  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return res.json();
  }

  return res.text();
}

export const api = {
  get: (endpoint, options) => request(endpoint, { ...options, method: "GET" }),
  post: (endpoint, body, options) =>
    request(endpoint, { ...options, method: "POST", body: JSON.stringify(body) }),
  put: (endpoint, body, options) =>
    request(endpoint, { ...options, method: "PUT", body: JSON.stringify(body) }),
  patch: (endpoint, body, options) =>
    request(endpoint, { ...options, method: "PATCH", body: JSON.stringify(body) }),
  delete: (endpoint, options) => request(endpoint, { ...options, method: "DELETE" }),
};
