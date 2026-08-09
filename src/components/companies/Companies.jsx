import Navbar from "../dashboard/Navbar";
import CompaniesTable from "./CompaniesTable";

export default function Companies() {
  return (
    <div className="min-h-screen bg-[#fbfbf9]">
      <Navbar activePage="companies" />

      <main className="mx-auto max-w-[1440px] px-4 pb-10 pl-[70px] sm:px-[30px] sm:pl-[30px] lg:pl-4">
        <div className="pt-5">
          <h1 className="text-[24px] font-bold leading-none text-[#1a1a2e] sm:text-[30px]">
            Companies
          </h1>
          <p className="mt-[5px] text-[16px] text-[#6b7280] sm:text-[18px]">
            All verified startups onboarded to the Calip platform.
          </p>
        </div>

        <div className="mt-6 sm:mt-[30px]">
          <CompaniesTable />
        </div>
      </main>
    </div>
  );
}
