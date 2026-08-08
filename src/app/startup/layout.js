import { generatePageMetadata } from "../lib/seo";

export const metadata = generatePageMetadata("startup");

export default function StartupLayout({ children }) {
  return children;
}