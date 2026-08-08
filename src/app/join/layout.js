import { generatePageMetadata } from "../lib/seo";
import JsonLd from "../components/JsonLd";

export const metadata = generatePageMetadata("join");

export default function JoinLayout({ children }) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Join", path: "/join" },
  ];

  return (
    <>
      <JsonLd page="join" breadcrumbs={breadcrumbs} />
      {children}
    </>
  );
}