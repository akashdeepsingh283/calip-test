const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LINKEDIN_RE = /linkedin\.com\//;

export function sanitize(str) {
  if (typeof str !== "string") return "";
  return str.replace(/[<>&"'`]/g, "").trim();
}

export function validateEmail(email) {
  if (!email || !sanitize(email)) return "Email is required.";
  if (!EMAIL_RE.test(sanitize(email))) return "Please enter a valid email address.";
  return "";
}

export function validateRequired(value, label) {
  if (!value || !sanitize(value)) return `${label} is required.`;
  return "";
}

export function validateLinkedIn(url) {
  if (!url || !sanitize(url)) return "LinkedIn profile is required.";
  if (!LINKEDIN_RE.test(sanitize(url))) return "Please enter a valid LinkedIn URL.";
  return "";
}
