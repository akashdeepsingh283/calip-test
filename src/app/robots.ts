export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://calip.io/sitemap.xml",
  };
}
