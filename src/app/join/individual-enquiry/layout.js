import { generatePageMetadata } from "../../lib/seo";
import JsonLd from "../../components/JsonLd";

export const metadata = generatePageMetadata("individual-enquiry");

export default function IndividualEnquiryLayout({ children }) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Join", path: "/join" },
    { name: "Individual Investor", path: "/join/individual-enquiry" },
  ];

  return (
    <>
      <JsonLd page="individual-enquiry" breadcrumbs={breadcrumbs} />
      {children}
    </>
  );
}