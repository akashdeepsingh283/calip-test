const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export async function submitToWeb3Forms({ subject, ...fields }) {
  if (!WEB3FORMS_KEY) {
    throw new Error("Web3Forms access key is not configured.");
  }

  let response;
  try {
    response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject,
        ...fields,
      }),
    });
  } catch {
    throw new Error("Network error. Please check your connection.");
  }

  let data;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message || "Submission failed. Please try again.");
  }

  return data;
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email) {
  if (!email || !email.trim()) return "Email is required.";
  if (!EMAIL_RE.test(email.trim())) return "Please enter a valid email address.";
  return "";
}

export function validateRequired(value, label) {
  if (!value || !value.trim()) return `${label} is required.`;
  return "";
}

const PHONE_RE = /^[\+\d][\d\s\-\(\)\.]{6,20}$/;

export function validatePhone(phone) {
  if (!phone || !phone.trim()) return "Mobile number is required.";
  if (!PHONE_RE.test(phone.trim())) return "Please enter a valid mobile number.";
  return "";
}

export function validateLinkedIn(url) {
  if (!url || !url.trim()) return "LinkedIn profile is required.";
  const trimmed = url.trim();
  if (!trimmed.includes("linkedin.com/")) return "Please enter a valid LinkedIn URL.";
  return "";
}
