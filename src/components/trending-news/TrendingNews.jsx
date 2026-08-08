import Navbar from "../dashboard/Navbar";
import CategoryTabs from "./CategoryTabs";
import FeaturedCard from "./FeaturedCard";
import NewsListItem from "./NewsListItem";
import { featuredArticles, latestArticles } from "./trendingNewsMockData";

export default function TrendingNews() {
  return (
    <div className="min-h-screen bg-[#fbfbf9]">
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-[30px] pb-10">
        <div className="pt-5">
          <h1 className="text-[30px] font-bold leading-none text-[#1a1a2e]">
            Trending News
          </h1>
          <p className="mt-[5px] text-[18px] leading-none text-[#6b7280]">
            Latest startup funding, market trends, and AI-generated summaries.
          </p>
        </div>

        <div className="mt-[30px]">
          <CategoryTabs />
        </div>

        <h2 className="mt-[33px] text-[20px] font-semibold leading-none text-[#1a1a2e]">
          Funding
        </h2>

        <div className="mt-[25px] grid grid-cols-1 gap-[20px] xl:grid-cols-2">
          {featuredArticles.map((article) => (
            <FeaturedCard key={article.id} {...article} />
          ))}
        </div>

        <h2 className="mt-[30px] text-[20px] font-semibold leading-none text-[#1a1a2e]">
          Latest
        </h2>

        <div className="mt-[25px] space-y-[20px]">
          {latestArticles.map((article) => (
            <NewsListItem key={article.id} {...article} />
          ))}
        </div>
      </main>
    </div>
  );
}
