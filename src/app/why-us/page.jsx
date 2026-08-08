
import BackgroundEffects from "../components/BackgroundEffects";
import Navbar from "../components/Navbar";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";

export const metadata = {
  title: "Why Calip.io — Built for the Way Capital Should Move",
  description:
    "Discover why Calip.io is the smarter way to access startup opportunities: smart network, fast connections, data-driven insights, and security by design.",
  alternates: {
    canonical: "https://calip.io/why-us",
  },
  openGraph: {
    title: "Why Calip.io — Built for the Way Capital Should Move",
    description:
      "Discover why Calip.io is the smarter way to access startup opportunities: smart network, fast connections, data-driven insights, and security by design.",
    url: "https://calip.io/why-us",
    siteName: "Calip.io",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Calip.io — Built for the Way Capital Should Move",
    description:
      "Discover why Calip.io is the smarter way to access startup opportunities.",
  },
};

export default function WhyUsPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Why Calip.io", path: "/why-us" },
  ];

  return (
    <>
      <JsonLd page="why-us" breadcrumbs={breadcrumbs} />
      <BackgroundEffects />
      <Navbar />
      <main className="relative pt-32">
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}
