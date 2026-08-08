import { generatePageMetadata } from "../lib/seo";

export const metadata = generatePageMetadata("wallet");

export default function WalletLayout({ children }) {
  return children;
}
