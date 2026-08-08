export async function GET() {
  const siteUrl = "https://calip.io";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Calip.io — Startup Investment &amp; Web3 Insights</title>
    <link>${siteUrl}</link>
    <description>Discover startup investing insights, Web3 ecosystem updates, and Calip.io platform announcements.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>info@calip.io (Calip.io Team)</managingEditor>
    <webMaster>info@calip.io (Calip.io Team)</webMaster>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
