import api from "./api";

const VALUE_TO_LABEL = {
  registrationType: {
    "private-limited": "Private Limited",
    llp: "LLP",
    opc: "OPC",
    "partnership-firm": "Partnership Firm",
    "sole-proprietorship": "Sole Proprietorship",
    other: "Other",
  },
  valuation: {
    "under-10-cr": "Under ₹10 Cr",
    "10-20-cr": "₹10–20 Cr",
    "20-50-cr": "₹20–50 Cr",
    "50-100-cr": "₹50–100 Cr",
    "100-500-cr": "₹100–500 Cr",
    "500-cr-plus": "₹500 Cr+",
  },
  stage: {
    "pre-revenue": "Pre-revenue",
    "revenue-generating": "Revenue Generating",
    "pre-series-a": "Pre-Series A",
    seed: "Seed",
    "series-a": "Series A",
    "series-b-plus": "Series B+",
    "growth-stage": "Growth Stage",
  },
  industry: {
    fintech: "FinTech",
    healthtech: "HealthTech",
    ai: "AI",
    saas: "SaaS",
    climatech: "ClimateTech",
    deeptech: "DeepTech",
    edtech: "EdTech",
    d2c: "D2C",
    logistics: "Logistics",
    manufacturing: "Manufacturing",
    other: "Other",
  },
  fundingStatus: {
    bootstrapped: "Bootstrapped",
    "angel-funded": "Angel Funded",
    "seed-funded": "Seed Funded",
    "vc-funded": "VC Funded",
    "corporate-backed": "Corporate Backed",
  },
};

function mapValue(map, key) {
  if (!key) return "";
  return map[key] || key;
}

export async function submitStartupRegistration(formData) {
  const response = await api.post("/startups/upload", formData);
  return response.data;
}

export function buildStartupFormData(form, files) {
  const fd = new FormData();

  fd.append("startupName", (form.startupName || "").trim());
  fd.append("founderName", (form.founderName || "").trim());
  fd.append("email", (form.email || "").trim());
  fd.append("mobileNumber", (form.mobile || "").trim());
  fd.append("linkedInProfile", (form.linkedIn || "").trim());
  fd.append("startupWebsite", (form.website || "").trim());
  fd.append(
    "companyRegistrationType",
    mapValue(VALUE_TO_LABEL.registrationType, form.registrationType)
  );
  fd.append(
    "currentStartupValuation",
    mapValue(VALUE_TO_LABEL.valuation, form.valuation)
  );
  fd.append("startupStage", mapValue(VALUE_TO_LABEL.stage, form.stage));
  fd.append("industrySector", mapValue(VALUE_TO_LABEL.industry, form.industry));
  fd.append(
    "fundingStatus",
    mapValue(VALUE_TO_LABEL.fundingStatus, form.fundingStatus)
  );

  if (files.pitchDeck) {
    fd.append("pitchDeck", files.pitchDeck);
  }

  return fd;
}
