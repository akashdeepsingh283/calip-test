"use client";

import { useState } from "react";
import InvestorForm from "../../contact/InvestorForm";
import Toast from "../../components/Toast";
import { submitInvestorEnquiry } from "../../services/contact";

export default function JoinInvestorEnquiryPage() {
  const [toastVisible, setToastVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (form) => {
    setLoading(true);
    setError("");

    try {
      await submitInvestorEnquiry(form.email);
      setToastVisible(true);
    } catch (err) {
      setError(err.message || "Unable to submit your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <InvestorForm
        onSubmit={handleSubmit}
        backHref="/join"
        backLabel="Back to Join"
        disabled={loading}
      />
      {error && (
        <p className="mx-auto mt-4 max-w-3xl px-6 text-center text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
      <Toast
        message="Your enquiry has been received! Our team will reach out to you soon."
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </>
  );
}