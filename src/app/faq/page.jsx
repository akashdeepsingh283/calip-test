import { generatePageMetadata } from "../lib/seo";
import ClientPage from "./ClientPage";
import JsonLd from "../components/JsonLd";

export const metadata = generatePageMetadata("faq");

export default function FAQPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <>
      <JsonLd page="faq" breadcrumbs={breadcrumbs} />
      <ClientPage />
    </>
  );
}