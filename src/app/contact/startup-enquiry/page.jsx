import StartupEnquiryClient from "./ClientPage";
import { generatePageMetadata } from "../../lib/seo";
import JsonLd from "../../components/JsonLd";

export const metadata = generatePageMetadata("startup-enquiry");

export default function StartupEnquiryPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Startup Enquiry", path: "/contact/startup-enquiry" },
  ];

  return (
    <>
      <JsonLd page="startup-enquiry" breadcrumbs={breadcrumbs} />
      <StartupEnquiryClient />
    </>
  );
}