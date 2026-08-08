"use client";

import { useState } from "react";
import PricingToggle from "./PricingToggle";
import PricingCard from "./PricingCard";
import UpgradeModal from "./UpgradeModal";
import { pricingPlans } from "./proMockData";

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");
  const [modalOpen, setModalOpen] = useState(false);

  const freePlan = pricingPlans.find((plan) => plan.variant === "free");
  const proPlan = pricingPlans.find((plan) => plan.variant === "pro");

  return (
    <>
      <div className="mt-[150px] flex flex-col items-center">
        <PricingToggle billing={billing} onBillingChange={setBilling} />

        <div className="mt-[113px] flex justify-center gap-[50.62px]">
          <PricingCard plan={freePlan} billing={billing} />
          <PricingCard
            plan={proPlan}
            billing={billing}
            onUpgrade={() => setModalOpen(true)}
          />
        </div>
      </div>

      <UpgradeModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
