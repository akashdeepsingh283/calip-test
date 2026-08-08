import { howItWorksSteps } from "./foundersMockData";

export default function HowItWorks() {
  return (
    <section className="mt-[110px]">
      <h2 className="text-center text-[32px] font-bold leading-[48px] tracking-[-0.5px] text-[#111827]">
        How it Works ?
      </h2>

      <div className="mt-[60px] flex flex-wrap justify-center gap-[32px]">
        {howItWorksSteps.map((step) => (
          <div
            key={step.id}
            className="h-[195px] w-[300px] max-w-full rounded-[20px] border border-[#e5e7eb] bg-white p-[26px] shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)]"
          >
            <h3 className="text-[20px] font-semibold leading-[22.5px] text-[#111827]">
              {step.title}
            </h3>
            <p className="mt-[26px] max-w-[209px] text-[16px] leading-[20.8px] text-[#4b5563]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
