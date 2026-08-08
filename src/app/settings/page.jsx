import { Sora } from "next/font/google";
import Navbar from "../../components/dashboard/Navbar";
import KycBanner from "../../components/settings/KycBanner";
import ProfileSection from "../../components/settings/ProfileSection";
import ConnectedWallets from "../../components/settings/ConnectedWallets";
import NotificationsSection from "../../components/settings/NotificationsSection";
import PrivacySection from "../../components/settings/PrivacySection";
import SecuritySection from "../../components/settings/SecuritySection";
import ActiveSessions from "../../components/settings/ActiveSessions";
import DeleteAccount from "../../components/settings/DeleteAccount";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Calip — Settings",
  description:
    "Manage your account preferences, connected wallets, notifications, privacy, security, and active sessions on Calip.",
};

export default function SettingsPage() {
  return (
    <div className={`${sora.className} min-h-screen bg-[#fbfbf9]`}>
      <Navbar activePage="settings" />

      <main className="mx-auto max-w-[1440px] px-[42px] pb-[60px]">
        <div className="pt-[20px]">
          <h1 className="text-[24px] font-semibold leading-none text-black">
            Settings
          </h1>
          <p className="mt-[11px] text-[14px] leading-none text-[#4b5563]">
            Manage your account preferences and get help
          </p>
        </div>

        <div className="mt-[65px] space-y-[30px]">
          <KycBanner />
          <ProfileSection />
          <ConnectedWallets />
          <NotificationsSection />
          <PrivacySection />
          <SecuritySection />
          <ActiveSessions />
          <DeleteAccount />
        </div>
      </main>
    </div>
  );
}
