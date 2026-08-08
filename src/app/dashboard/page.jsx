import BeforeInvesting from "../../components/dashboard/BeforeInvesting";
import AfterInvesting from "../../components/dashboard/AfterInvesting";
import AfterInvestingActivated from "../../components/dashboard/AfterInvestingActivated";

export const metadata = {
  title: "Calip — Dashboard",
  description: "Your investment portfolio at a glance",
};

export default function DashboardPage() {
  return (
    <div>
      <div className="bg-[#fef9c3] px-4 py-2 text-center text-sm font-medium text-[#854d0e]">
        BEFORE INVESTING
      </div>
      <BeforeInvesting />

      <div className="mt-10 bg-[#d1fae5] px-4 py-2 text-center text-sm font-medium text-[#065f46]">
        AFTER INVESTING
      </div>
      <AfterInvesting />

      <div className="mt-10 bg-[#dbeafe] px-4 py-2 text-center text-sm font-medium text-[#1e40af]">
        AFTER INVESTING — ACTIVATED
      </div>
      <AfterInvestingActivated />
    </div>
  );
}
