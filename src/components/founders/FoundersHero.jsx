import { ArrowRight } from "lucide-react";

export default function FoundersHero() {
  return (
    <section className="pt-[40px]">
      <p className="text-center text-[24px] font-semibold text-black">
        For Founders
      </p>

      <h1 className="mt-[20px] text-center text-[48px] font-bold leading-[55px] text-[#6051b4]">
        Calip
      </h1>
      <p className="text-center text-[36px] font-bold leading-[55px] text-[#c39fe3]">
        Web 3 investment for start ups
      </p>

      <p className="mx-auto mt-[16px] max-w-[520px] text-center text-[20px] font-bold leading-[30px] text-[#4b5563]">
        List your startup on Calip to unlock transparent token auctions,
        AI-powered investor matching, and on-chain equity management all in one
        platform.
      </p>

      <div className="mt-[40px] flex justify-center">
        <a
          href="#apply"
          className="inline-flex h-[25px] w-[150px] items-center justify-center gap-[8px] rounded-[10px] bg-[#6450ea] text-[14px] font-normal text-white transition-colors hover:bg-[#5346ae]"
        >
          Apply to raise
          <ArrowRight className="h-[10px] w-[10px]" strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}
