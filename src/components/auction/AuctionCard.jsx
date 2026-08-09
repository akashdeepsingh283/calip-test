"use client";

import { useEffect, useState } from "react";
import { Clock, ExternalLink, X } from "lucide-react";

function formatTimeDiff(diffMs) {
  if (diffMs <= 0) return "00h 00m 00s";
  const totalSeconds = Math.floor(diffMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}

export default function AuctionCard({ item }) {
  const [showBidModal, setShowBidModal] = useState(false);
  const [bidAmount, setBidAmount] = useState("");
  const status = item.status || "live";
  const badgeClass =
    status === "live"
      ? "bg-[#8b7cff] text-white"
      : status === "upcoming"
        ? "border border-[#d1d5db] bg-white text-[#6b7280]"
        : "bg-[#f3f4f6] text-[#9ca3af]";
  const badgeLabel =
    status === "live" ? "Live" : status === "upcoming" ? "Coming soon" : "Closed";

  const buttonClass =
    status === "live"
      ? "bg-[#8b7cff] text-white hover:bg-[#7a6bef]"
      : status === "upcoming"
        ? "border border-[#d1d5db] bg-white text-[#374151] hover:bg-[#f9fafb]"
        : "bg-[#f3f4f6] text-[#9ca3af] cursor-not-allowed";

  const buttonLabel =
    status === "live"
      ? "Place Bid"
      : status === "upcoming"
        ? "Notify Me"
        : "View Details";

  function handleBidClick() {
    if (status === "live") {
      setShowBidModal(true);
    }
  }

  function closeModal() {
    setShowBidModal(false);
    setBidAmount("");
  }

  function calculateTokens(amount) {
    if (!amount || !item.pricePerToken) return 0;
    const priceNum = parseFloat(item.pricePerToken.replace(/[^\d.]/g, ""));
    return priceNum > 0 ? (amount / priceNum).toFixed(2) : 0;
  }

  // Countdown timer for live auctions
  const [timeLeft, setTimeLeft] = useState("");
  useEffect(() => {
    if (!item.endTime) return;
    const endTime = new Date(item.endTime);
    function update() {
      const diff = endTime.getTime() - Date.now();
      setTimeLeft(formatTimeDiff(diff));
    }
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [item.endTime]);

  return (
    <div className="relative flex h-full w-full flex-col rounded-xl border border-[#e5e7eb] bg-white p-0 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div
        className={`absolute right-2 top-2 inline-flex h-[22px] items-center rounded-[4px] px-2 text-xs font-medium leading-none sm:right-[14px] sm:top-[14px] sm:h-[25px] sm:px-2.5 sm:text-sm ${badgeClass}`}
      >
        {badgeLabel}
      </div>

      <div className="flex items-start gap-3 px-4 pt-4 sm:px-[22px] sm:pt-[18px]">
        <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[10px] bg-[#f3f4f6] text-[18px] font-bold text-[#6366f1] sm:h-[55px] sm:w-[55px] sm:text-[22px]">
          {item.logoLetter}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[18px] font-semibold leading-tight text-[#1a1a2e] sm:text-[20px]">
            {item.companyName}
          </h3>
          <span className="text-[13px] leading-none text-[#6b7280] sm:text-[15px]">
            {item.sector}
          </span>

          {/* Countdown timer for live auctions - below company name */}
          {status === "live" && item.endTime && (
            <div className="mt-[4px] flex items-center gap-2 text-[11px] font-medium text-[#8b7cff] sm:text-[12px]">
              <Clock className="h-3 w-3" strokeWidth={2} />
              <span>Ends in {timeLeft}</span>
            </div>
          )}
        </div>
      </div>

      <p className="mt-4 line-clamp-2 px-4 text-[14px] leading-[19px] text-[#374151] sm:mt-[22px] sm:px-[24px]">
        {item.description}
      </p>

      {/* Token details section replacing Equity column */}
      {item.tokenTicker && (
        <div className="mt-4 mx-4 rounded-[12px] bg-[#f9fafb] p-[14px] sm:mt-[18px] sm:mx-[22px]">
          <p className="mb-[8px] text-[12px] font-semibold uppercase tracking-[0.1em] text-[#9ca3af]">
            Token Details
          </p>
          <div className="grid grid-cols-2 gap-x-[12px] gap-y-[6px] text-[14px]">
            <div>
              <span className="text-[#9ca3af]">Token</span>
              <span className="float-right font-semibold text-[#1a1a2e]">
                {item.tokenName} ({item.tokenTicker})
              </span>
            </div>
            <div>
              <span className="text-[#9ca3af]">Supply</span>
              <span className="float-right font-semibold text-[#1a1a2e]">
                {item.tokenSupply}
              </span>
            </div>
            <div>
              <span className="text-[#9ca3af]">Price / Token</span>
              <span className="float-right font-semibold text-[#1a1a2e]">
                {item.pricePerToken}
              </span>
            </div>
            <div>
              <span className="text-[#9ca3af]">Vesting</span>
              <span className="float-right font-semibold text-[#1a1a2e]">
                {item.vestingPeriod}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 grid flex-1 auto-rows-[min-content] grid-cols-2 gap-x-[5px] gap-y-[4px] px-4 sm:mt-[22px] sm:px-[22px]">
        <div className="rounded-lg bg-[#f9fafb] px-3 py-[7px] sm:px-4">
          <p className="text-[12px] text-[#9ca3af]">Current Bid</p>
          <p className="text-[14px] font-semibold text-[#1a1a2e] sm:text-[16px]">
            ₹{item.currentBid.toLocaleString()}
          </p>
          {item.tokenAmount && (
            <p className="text-[10px] text-[#6b7280] sm:text-[11px]">{item.tokenAmount}</p>
          )}
        </div>
        <div className="rounded-lg bg-[#f9fafb] px-3 py-[7px] sm:px-4">
          <p className="text-[12px] text-[#9ca3af]">Target</p>
          <p className="text-[14px] font-semibold text-[#1a1a2e] sm:text-[16px]">
            ₹{item.targetAmount.toLocaleString()}
          </p>
          {item.tokenAmount && (
            <p className="text-[10px] text-[#6b7280] sm:text-[11px]">
              {Math.round(item.targetAmount / parseFloat(item.pricePerToken.replace(/[^\d.]/g, ""))).toLocaleString()} {item.tokenTicker}
            </p>
          )}
        </div>
        <div className="rounded-lg bg-[#f9fafb] px-3 py-[7px] sm:px-4">
          <p className="text-[12px] text-[#9ca3af]">Equity</p>
          <p className="text-[14px] font-semibold text-[#1a1a2e] sm:text-[16px]">
            {item.equityPercent}%
          </p>
        </div>
        <div className="rounded-lg bg-[#f9fafb] px-3 py-[7px] sm:px-4">
          <p className="text-[12px] text-[#9ca3af]">Avg. Bid</p>
          <p className="text-[14px] font-semibold text-[#1a1a2e] sm:text-[16px]">
            ₹{item.avgBid.toLocaleString()}
          </p>
          {item.tokenAmount && (
            <p className="text-[10px] text-[#6b7280] sm:text-[11px]">
              {Math.round(item.avgBid / parseFloat(item.pricePerToken.replace(/[^\d.]/g, ""))).toLocaleString()} {item.tokenTicker}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 mb-[14px] px-4 sm:mt-[22px] sm:px-[22px]">
        <div className="h-[6px] w-full overflow-hidden rounded-full bg-[#e5e7eb]">
          <div
            className="h-full rounded-full bg-[#8b7cff]"
            style={{ width: `${item.progressPercent}%` }}
          />
        </div>
      </div>

      <div className="mt-auto flex justify-center px-4 pb-4 sm:px-[22px] sm:pb-[18px]">
        <button
          type="button"
          disabled={status === "closed"}
          onClick={handleBidClick}
          className={`flex h-[38px] w-full items-center justify-center rounded-lg px-6 text-[14px] font-medium transition-colors ${buttonClass}`}
        >
          {buttonLabel}
        </button>
      </div>

      {/* Bid placement confirmation modal */}
      {showBidModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-[480px] rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-[22px] font-semibold text-[#1a1a2e]">Place Your Bid</h3>
              <button
                type="button"
                onClick={closeModal}
                className="flex h-[32px] w-[32px] items-center justify-center rounded-lg hover:bg-[#f3f4f6]"
              >
                <X className="h-5 w-5 text-[#6b7280]" strokeWidth={2} />
              </button>
            </div>

            <div className="mt-[20px] rounded-xl bg-[#f9fafb] p-[16px]">
              <div className="flex items-center gap-3">
                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[10px] bg-[#eef2ff] text-[20px] font-bold text-[#8b7cff]">
                  {item.logoLetter}
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-[#1a1a2e]">{item.companyName}</p>
                  <p className="text-[13px] text-[#6b7280]">{item.sector}</p>
                </div>
              </div>
            </div>

            <div className="mt-[16px]">
              <label className="mb-[6px] block text-[13px] font-medium text-[#374151]">
                Bid Amount (₹)
              </label>
              <input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full rounded-lg border border-[#e5e7eb] px-4 py-3 text-[15px] text-[#1a1a2e] placeholder:text-[#9ca3af] focus:border-[#8b7cff] focus:outline-none"
              />
            </div>

            {bidAmount && parseFloat(bidAmount) > 0 && (
              <div className="mt-[16px] space-y-2 rounded-xl bg-[#f9fafb] p-[14px] text-[14px]">
                <div className="flex justify-between">
                  <span className="text-[#6b7280]">Tokens You'll Receive</span>
                  <span className="font-semibold text-[#1a1a2e]">{calculateTokens(bidAmount)} {item.tokenTicker}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7280]">Price per Token</span>
                  <span className="font-semibold text-[#1a1a2e]">{item.pricePerToken}</span>
                </div>
                <div className="flex justify-between border-t border-[#e5e7eb] pt-2">
                  <span className="text-[#6b7280]">Vesting Period</span>
                  <span className="font-semibold text-[#1a1a2e]">{item.vestingPeriod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7280]">Gas Estimate</span>
                  <span className="font-semibold text-[#1a1a2e]">~₹ 50 - 150</span>
                </div>
              </div>
            )}

            <div className="mt-[20px] flex gap-3">
              <button
                type="button"
                onClick={closeModal}
                className="flex h-[44px] flex-1 items-center justify-center rounded-lg border border-[#d1d5db] bg-white text-[14px] font-medium text-[#374151] hover:bg-[#f9fafb]"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!bidAmount || parseFloat(bidAmount) <= 0}
                className="flex h-[44px] flex-1 items-center justify-center rounded-lg bg-[#8b7cff] text-[14px] font-medium text-white hover:bg-[#7a6bef] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Confirm Bid
              </button>
            </div>
          </div>
        </div>
      )}

      {/* On-chain transaction explorer link for live auctions */}
      {status === "live" && item.txHash && (
        <div className="px-4 pb-2 sm:px-[22px] sm:pb-[10px]">
          <a
            href={`https://etherscan.io/tx/${item.txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 text-[12px] text-[#8b7cff] hover:text-[#7a6bef]"
          >
            <span>View on explorer</span>
            <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
          </a>
        </div>
      )}
    </div>
  );
}
