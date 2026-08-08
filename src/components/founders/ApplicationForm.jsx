"use client";

import { useState } from "react";
import { CircleCheck } from "lucide-react";

const fields = [
  {
    name: "companyName",
    label: "Company Name",
    type: "text",
    placeholder: "Enter your company name",
  },
  {
    name: "yourName",
    label: "Your Name",
    type: "text",
    placeholder: "Enter your full name",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email address",
  },
  {
    name: "companyWebsite",
    label: "Company Website",
    type: "text",
    placeholder: "https://your-company.com",
  },
  {
    name: "sector",
    label: "Sector",
    type: "text",
    placeholder: "e.g. FinTech, HealthTech, Web3",
  },
];

const fieldStyles =
  "h-[40px] w-full rounded-[10px] border border-[#242730] bg-[#f4f5f7] px-4 text-[18px] text-[#1a1a2e] placeholder:text-[#9ca3af] outline-none transition-colors focus:border-[#6366f1] focus:bg-white";

export default function ApplicationForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.companyName?.trim()) {
      nextErrors.companyName = "Company name is required.";
    }
    if (!values.yourName?.trim()) {
      nextErrors.yourName = "Your name is required.";
    }
    if (!values.email?.trim()) {
      nextErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.about?.trim()) {
      nextErrors.about = "Please tell us more about your startup.";
    }
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setValues({});
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="apply" className="mt-[110px] scroll-mt-[110px]">
      <h2 className="text-center text-[32px] font-bold leading-[48px] tracking-[-0.5px] text-[#111827]">
        Apply to list your startup
      </h2>

      <p className="mx-auto mt-[36px] max-w-[1000px] text-center text-[32px] leading-[40px] text-[#4b5563]">
        Complete the form below and our team will review your application
        within 5 business days.
      </p>

      {submitted ? (
        <div className="mx-auto mt-[60px] flex max-w-[560px] flex-col items-center rounded-[20px] border border-[#e5e7eb] bg-white px-8 py-[50px] text-center shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#d1fae5]">
            <CircleCheck
              className="h-[36px] w-[36px] text-[#10b981]"
              strokeWidth={2}
            />
          </div>
          <h3 className="mt-[20px] text-[24px] font-semibold text-[#111827]">
            Application submitted
          </h3>
          <p className="mt-[10px] text-[16px] leading-[22px] text-[#4b5563]">
            Thanks for applying. Our team will review your application within 5
            business days and reach out to you by email.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-[28px] inline-flex h-[46px] items-center justify-center rounded-[10px] border border-[#d1d5db] bg-white px-6 text-[16px] font-medium text-[#374151] transition-colors hover:bg-[#f9fafb]"
          >
            Submit another application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mt-[60px]">
          <div className="mx-auto flex max-w-[560px] flex-col gap-[45px]">
            {fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="mb-[9px] block text-[24px] leading-[normal] text-[#111827]"
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={values[field.name] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className={fieldStyles}
                />
                {errors[field.name] && (
                  <p className="mt-[6px] text-[14px] text-red-500">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            <div>
              <label
                htmlFor="about"
                className="mb-[9px] block text-[24px] leading-[normal] text-[#111827]"
              >
                Tell us more about your startup
              </label>
              <textarea
                id="about"
                name="about"
                rows={8}
                value={values.about || ""}
                onChange={handleChange}
                placeholder="Tell us about your product, traction, team, and funding goals..."
                className={`${fieldStyles} h-[266px] resize-none py-3`}
              />
              {errors.about && (
                <p className="mt-[6px] text-[14px] text-red-500">
                  {errors.about}
                </p>
              )}
            </div>
          </div>

          <div className="mt-[44px] flex justify-center">
            <button
              type="submit"
              className="h-[50px] w-[331px] rounded-[10px] bg-[#4f46e5] text-[24px] font-normal text-white transition-colors hover:bg-[#4338ca]"
            >
              Submit Application
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
