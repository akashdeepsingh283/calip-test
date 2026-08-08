import Navbar from "../dashboard/Navbar";
import CompaniesTable from "./CompaniesTable";

export default function Companies() {
  return (
    <div className="min-h-screen bg-[#fbfbf9]">
      <Navbar activePage="companies" />

      <main className="mx-auto max-w-[1440px] px-[30px] pb-10">
        <div className="pt-5">
          <h1 className="text-[30px] font-bold leading-none text-[#1a1a2e]">
            Companies
          </h1>
          <p className="mt-[5px] text-[18px] text-[#6b7280]">
            All verified startups onboarded to the Calip platform.
          </p>
        </div>

        <div className="mt-[30px]">
          <CompaniesTable />
        </div>
      </main>
    </div>
  );
}
