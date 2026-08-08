import { pages } from "./lib/seo";

export default function sitemap() {
  const baseUrl = "https://calip.io";

  const now = new Date();

  const priorityMap: Record<string, number> = {
    "/": 1.0,
    "/about": 0.9,
    "/startup": 0.9,
    "/join": 0.8,
    "/join/individual-enquiry": 0.9,
    "/join/investor-enquiry": 0.8,
    "/waitlist": 0.9,
    "/faq": 0.8,
    "/contact": 0.7,
    "/contact/investor-enquiry": 0.7,
    "/contact/startup-enquiry": 0.7,
    "/why-us": 0.8,
    "/wallet": 0.6,
    "/glossary": 0.8,
    "/privacy": 0.5,
    "/terms": 0.5,
    "/security": 0.5,
    "/legal": 0.5,
  };

  const changeFreqMap: Record<string, string> = {
    "/": "weekly",
    "/about": "monthly",
    "/startup": "weekly",
    "/join": "monthly",
    "/join/individual-enquiry": "monthly",
    "/join/investor-enquiry": "monthly",
    "/waitlist": "weekly",
    "/faq": "weekly",
    "/contact": "monthly",
    "/contact/investor-enquiry": "monthly",
    "/contact/startup-enquiry": "monthly",
    "/why-us": "monthly",
    "/wallet": "monthly",
    "/glossary": "monthly",
    "/privacy": "yearly",
    "/terms": "yearly",
    "/security": "yearly",
    "/legal": "yearly",
  };

  const staticPages = Object.values(pages).map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: now,
    changeFrequency: changeFreqMap[page.path] || "monthly",
    priority: priorityMap[page.path] || 0.5,
  }));

  return staticPages;
}
