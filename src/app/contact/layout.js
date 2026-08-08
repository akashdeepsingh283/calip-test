import { generatePageMetadata } from "../lib/seo";

export const metadata = generatePageMetadata("contact");

export default function ContactLayout({ children }) {
  return children;
}
