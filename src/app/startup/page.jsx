import BackgroundEffects from "../components/BackgroundEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StartupForm from "../contact/StartupForm";
import JsonLd from "../components/JsonLd";
import { generatePageMetadata } from "../lib/seo";
import StartupClient from "./ClientPage";

export const metadata = generatePageMetadata("startup");

export default function StartupPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Startup Application", path: "/startup" },
  ];

  return (
    <>
      <JsonLd page="startup" breadcrumbs={breadcrumbs} />
      <StartupClient />
    </>
  );
}