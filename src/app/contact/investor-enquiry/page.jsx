import InvestorEnquiryClient from "./ClientPage";
import { generatePageMetadata } from "../../lib/seo";
import JsonLd from "../../components/JsonLd";

export const metadata = generatePageMetadata("investor-enquiry");

export default function InvestorEnquiryPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Investor Enquiry", path: "/contact/investor-enquiry" },
  ];

  return (
    <>
      <JsonLd page="investor-enquiry" breadcrumbs={breadcrumbs} />
      <InvestorEnquiryClient />
    </>
  );
}