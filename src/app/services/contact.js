import api from "./api";

export async function submitInvestorEnquiry(email) {
  const response = await api.post("/contact/investor", {
    email: email.trim(),
  });

  return response.data;
}
