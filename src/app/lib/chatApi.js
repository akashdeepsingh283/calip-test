import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function sendChatMessage(message, sessionId) {
  const { data } = await axios.post(`${API_BASE}/api/chat`, {
    message,
    sessionId,
  });
  return data;
}

export async function fetchFAQs(category, search, limit = 20, offset = 0) {
  const params = {};
  if (category) params.category = category;
  if (search) params.search = search;
  params.limit = limit;
  params.offset = offset;
  const { data } = await axios.get(`${API_BASE}/api/faqs`, { params });
  return data;
}

export async function fetchFAQById(id) {
  const { data } = await axios.get(`${API_BASE}/api/faqs/${id}`);
  return data;
}

export async function submitFeedback(sessionId, messageId, rating, comment) {
  const { data } = await axios.post(`${API_BASE}/api/feedback`, {
    sessionId,
    messageId,
    rating,
    comment,
  });
  return data;
}

export async function checkHealth() {
  const { data } = await axios.get(`${API_BASE}/api/health`);
  return data;
}
