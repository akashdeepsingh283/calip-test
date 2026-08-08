import { generatePageMetadata } from "../lib/seo";
import JsonLd from "../components/JsonLd";

export const metadata = generatePageMetadata("waitlist");

export default function WaitlistLayout({ children }) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Waitlist", path: "/waitlist" },
  ];

  return (
    <>
      <JsonLd page="waitlist" breadcrumbs={breadcrumbs} />
      {children}
    </>
  );
}