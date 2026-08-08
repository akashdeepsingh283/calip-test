"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Sparkles, CheckCircle, Rocket, BarChart3, Users } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import PremiumInput from "../components/inputs/PremiumInput";
import PremiumSelect from "../components/inputs/PremiumSelect";
import UploadZone from "../components/inputs/UploadZone";
import SectionStep from "../components/inputs/SectionStep";
import SuccessAnimation from "../components/SuccessAnimation";
import { submitStartupRegistration, buildStartupFormData } from "../services/startup";
import { validateEmail, validateRequired, validateLinkedIn, validatePhone } from "../lib/web3forms";

const STORAGE_KEY = "calip-startup-registration";

const registrationTypes = [
  { value: "private-limited", label: "Private Limited" },
  { value: "llp", label: "LLP" },
  { value: "opc", label: "OPC" },
  { value: "partnership-firm", label: "Partnership Firm" },
  { value: "sole-proprietorship", label: "Sole Proprietorship" },
  { value: "other", label: "Other" },
];

const valuations = [
  { value: "under-10-cr", label: "Under ₹10 Cr" },
  { value: "10-20-cr", label: "₹10–20 Cr" },
  { value: "20-50-cr", label: "₹20–50 Cr" },
  { value: "50-100-cr", label: "₹50–100 Cr" },
  { value: "100-500-cr", label: "₹100–500 Cr" },
  { value: "500-cr-plus", label: "₹500 Cr+" },
];

const stages = [
  { value: "pre-revenue", label: "Pre-revenue" },
  { value: "revenue-generating", label: "Revenue Generating" },
  { value: "pre-series-a", label: "Pre-Series A" },
  { value: "seed", label: "Seed" },
  { value: "series-a", label: "Series A" },
  { value: "series-b-plus", label: "Series B+" },
  { value: "growth-stage", label: "Growth Stage" },
];

const industries = [
  { value: "fintech", label: "FinTech" },
  { value: "healthtech", label: "HealthTech" },
  { value: "ai", label: "AI" },
  { value: "saas", label: "SaaS" },
  { value: "climatech", label: "ClimateTech" },
  { value: "deeptech", label: "DeepTech" },
  { value: "edtech", label: "EdTech" },
  { value: "d2c", label: "D2C" },
  { value: "logistics", label: "Logistics" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "other", label: "Other" },
];

const fundingStatuses = [
  { value: "bootstrapped", label: "Bootstrapped" },
  { value: "angel-funded", label: "Angel Funded" },
  { value: "seed-funded", label: "Seed Funded" },
  { value: "vc-funded", label: "VC Funded" },
  { value: "corporate-backed", label: "Corporate Backed" },
];

function sanitizeRestoredData(data) {
  const valid = (options, value) => !value || options.some((o) => o.value === value);
  return {
    ...data,
    registrationType: valid(registrationTypes, data.registrationType) ? data.registrationType : "",
    valuation: valid(valuations, data.valuation) ? data.valuation : "",
    stage: valid(stages, data.stage) ? data.stage : "",
    industry: valid(industries, data.industry) ? data.industry : "",
    fundingStatus: valid(fundingStatuses, data.fundingStatus) ? data.fundingStatus : "",
  };
}

const initialForm = {
  startupName: "",
  founderName: "",
  email: "",
  mobile: "",
  linkedIn: "",
  website: "",
  registrationType: "",
  valuation: "",
  stage: "",
  industry: "",
  fundingStatus: "",
};

export default function RegisterStartupForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState({ pitchDeck: null });
  const [successData, setSuccessData] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setForm((prev) => ({ ...prev, ...sanitizeRestoredData(parsed) }));
      }
    } catch {}
  }, []);

  useEffect(() => {
    const hasData = Object.values(form).some((v) => v && v.length > 0);
    if (hasData) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    }
  }, [form]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const handleBlur = useCallback(
    (name, value) => {
      let err = "";
      switch (name) {
        case "startupName":
          err = validateRequired(value, "Startup name");
          break;
        case "founderName":
          err = validateRequired(value, "Founder name");
          break;
        case "email":
          err = validateEmail(value);
          break;
        case "mobile":
          err = validatePhone(value);
          break;
        case "linkedIn":
          err = validateLinkedIn(value);
          break;
        case "website":
          err = validateRequired(value, "Website");
          break;
      }
      setErrors((prev) => {
        if (err) return { ...prev, [name]: err };
        const next = { ...prev };
        delete next[name];
        return next;
      });
    },
    []
  );

  const handleSelect = useCallback((name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const validate = () => {
    const e = {};
    const nameErr = validateRequired(form.startupName, "Startup name");
    const founderErr = validateRequired(form.founderName, "Founder name");
    const emailErr = validateEmail(form.email);
    const mobileErr = validatePhone(form.mobile);
    const linkedinErr = validateLinkedIn(form.linkedIn);
    const websiteErr = validateRequired(form.website, "Website");

    if (nameErr) e.startupName = nameErr;
    if (founderErr) e.founderName = founderErr;
    if (emailErr) e.email = emailErr;
    if (mobileErr) e.mobile = mobileErr;
    if (linkedinErr) e.linkedIn = linkedinErr;
    if (websiteErr) e.website = websiteErr;
    if (!form.registrationType) e.registrationType = "Registration type is required.";
    if (!form.valuation) e.valuation = "Valuation is required.";
    if (!form.stage) e.stage = "Stage is required.";
    if (!form.industry) e.industry = "Industry is required.";
    if (!form.fundingStatus) e.fundingStatus = "Funding status is required.";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setErrors({});

    try {
      const formData = buildStartupFormData(form, uploadedFiles);
      await submitStartupRegistration(formData);

      setSuccessData({
        startupName: form.startupName.trim(),
        founderName: form.founderName.trim(),
      });

      setShowSuccess(true);
      localStorage.removeItem(STORAGE_KEY);
      setForm(initialForm);
      setUploadedFiles({ pitchDeck: null });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      if (err.status === 400 && err.data && typeof err.data === "object") {
        const fieldErrors = {};
        Object.entries(err.data).forEach(([key, val]) => {
          const fieldMap = {
            mobileNumber: "mobile",
            linkedInProfile: "linkedIn",
            startupWebsite: "website",
            companyRegistrationType: "registrationType",
            currentStartupValuation: "valuation",
            startupStage: "stage",
            industrySector: "industry",
          };
          const field = fieldMap[key] || key;
          fieldErrors[field] = Array.isArray(val) ? val[0] : val;
        });
        if (Object.keys(fieldErrors).length > 0) {
          setErrors(fieldErrors);
        } else {
          setErrors({ form: err.message });
        }
      } else {
        setErrors({ form: err.message });
      }
    } finally {
      setLoading(false);
    }
  };

  if (showSuccess && successData) {
    return (
      <div className="success-card-fade">
        <SuccessAnimation
          visible={showSuccess}
          message={
            <>
              Your startup <span className="text-primary-glow">&ldquo;{successData.startupName}&rdquo;</span> has been registered successfully.
            </>
          }
          onClose={() => setShowSuccess(false)}
        />

        <div className="mt-10 mx-auto max-w-2xl">
          <article className="group glass depth-2 depth-hover hover:border-white/10 relative overflow-hidden rounded-3xl p-8 lg:p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/30 mb-6">
              <CheckCircle className="h-8 w-8 text-emerald-400" aria-hidden="true" />
            </div>

            <h2 className="font-display text-2xl font-semibold text-foreground">
              Application Received
            </h2>
            <p className="mt-3 text-muted-foreground text-sm max-w-md mx-auto">
              Thank you, {successData.founderName}. Our team will review your application and reach out to {form.email} within 2–3 business days.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 text-left">
              {[
                { icon: Rocket, title: "Review", desc: "Our team evaluates your startup profile" },
                { icon: BarChart3, title: "Verification", desc: "We verify your company details and traction" },
                { icon: Users, title: "Onboarding", desc: "Get listed and connect with investors" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 text-center"
                >
                  <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                    <item.icon className="h-4 w-4 text-primary-glow" aria-hidden="true" />
                  </div>
                  <p className="mt-2 text-xs font-medium text-foreground">{item.title}</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="btn-primary-glow btn-press inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white"
              >
                Back to Home
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Startup registration form" className="w-full max-w-3xl ml-4 sm:mx-auto">
      <article className="group glass depth-2 depth-hover hover:border-white/10 relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10">
        {/* Section 1 */}
        <SectionStep number={1} title="Basic Information" />
        <div className="grid gap-5 sm:grid-cols-2">
          <PremiumInput
            label="Startup Name"
            name="startupName"
            value={form.startupName}
            onChange={handleChange}
            onBlur={() => handleBlur("startupName", form.startupName)}
            error={errors.startupName}
            required
            autoComplete="organization"
          />
          <PremiumInput
            label="Founder Name"
            name="founderName"
            value={form.founderName}
            onChange={handleChange}
            onBlur={() => handleBlur("founderName", form.founderName)}
            error={errors.founderName}
            required
            autoComplete="name"
          />
          <PremiumInput
            label="Official Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onBlur={() => handleBlur("email", form.email)}
            error={errors.email}
            required
            autoComplete="email"
          />
          <PremiumInput
            label="Mobile Number"
            name="mobile"
            type="tel"
            value={form.mobile}
            onChange={handleChange}
            onBlur={() => handleBlur("mobile", form.mobile)}
            error={errors.mobile}
            required
            autoComplete="tel"
          />
          <PremiumInput
            label="LinkedIn Profile"
            name="linkedIn"
            type="url"
            value={form.linkedIn}
            onChange={handleChange}
            onBlur={() => handleBlur("linkedIn", form.linkedIn)}
            error={errors.linkedIn}
            required
            placeholder="https://linkedin.com/in/..."
            autoComplete="url"
          />
          <PremiumInput
            label="Startup Website"
            name="website"
            type="url"
            value={form.website}
            onChange={handleChange}
            onBlur={() => handleBlur("website", form.website)}
            error={errors.website}
            autoComplete="url"
            placeholder="https://"
          />
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" aria-hidden="true" />

        {/* Section 2 */}
        <SectionStep number={2} title="Qualification" />
        <div
          className="grid gap-5 sm:grid-cols-2"
        >
          <PremiumSelect
            label="Company Registration Type"
            name="registrationType"
            value={form.registrationType}
            onChange={(e) => handleSelect("registrationType", e.target.value)}
            options={registrationTypes}
            error={errors.registrationType}
            required
          />
          <PremiumSelect
            label="Current Startup Valuation"
            name="valuation"
            value={form.valuation}
            onChange={(e) => handleSelect("valuation", e.target.value)}
            options={valuations}
            error={errors.valuation}
            required
          />
          <PremiumSelect
            label="Startup Stage"
            name="stage"
            value={form.stage}
            onChange={(e) => handleSelect("stage", e.target.value)}
            options={stages}
            error={errors.stage}
            required
          />
          <PremiumSelect
            label="Industry / Sector"
            name="industry"
            value={form.industry}
            onChange={(e) => handleSelect("industry", e.target.value)}
            options={industries}
            error={errors.industry}
            required
          />
          <div className="sm:col-span-2">
            <PremiumSelect
              label="Funding Status"
              name="fundingStatus"
              value={form.fundingStatus}
              onChange={(e) => handleSelect("fundingStatus", e.target.value)}
              options={fundingStatuses}
              error={errors.fundingStatus}
              required
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" aria-hidden="true" />

        {/* Section 3 */}
        <SectionStep number={3} title="Uploads" />
        <div className="space-y-6">
          <UploadZone
            label="Pitch Deck (optional)"
            onFiles={(files) => {
              setUploadedFiles({ pitchDeck: files[0] || null });
              setErrors((prev) => {
                const next = { ...prev };
                delete next.form;
                return next;
              });
            }}
          />
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent" aria-hidden="true" />

        {/* Error */}
        {errors.form && (
          <p
            className="error-message mb-6 text-sm text-red-400 text-center"
            role="alert"
          >
            {errors.form}
          </p>
        )}

        {/* Submit */}
        <div className="flex justify-center"
        >
          <button
            type="submit"
            disabled={loading}
            className="btn-primary-glow btn-press group relative inline-flex items-center gap-2.5 rounded-full px-10 py-4 text-sm font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background overflow-hidden"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Submitting...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Register Your Startup
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </article>
    </form>
  );
}
