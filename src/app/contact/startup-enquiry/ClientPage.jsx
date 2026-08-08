"use client";

import BackgroundEffects from "../../components/BackgroundEffects";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StartupForm from "../StartupForm";

export default function StartupEnquiryClient() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main className="relative pt-32 pb-20 page-enter">
        <StartupForm
          backHref="/"
          backLabel="Back to Join"
        />
      </main>
      <Footer />
    </>
  );
}
