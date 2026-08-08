export const profileUser = {
  name: "Yogesh Thakur",
  handle: "@yogesh_thakur_001",
};

export const profileFields = [
  { id: 1, label: "First Name", value: "Yogesh" },
  { id: 2, label: "Last Name", value: "Thakur" },
  { id: 3, label: "Email", value: "yogeshthakur111@gmail.com" },
  { id: 4, label: "Phone", value: "+91 98763 45678" },
  { id: 5, label: "Country", value: "India" },
  { id: 6, label: "City", value: "Ahmedabad" },
];

export const profileFullWidthFields = [
  { id: 7, label: "Bio", value: "______________________________________________________" },
  { id: 8, label: "Website", value: "______________________________________________________" },
];

export const wallets = [
  {
    id: 1,
    name: "MetaMask",
    address: "0x7C5C...92fE",
    badge: "Primary",
    badgeClass: "bg-[#6450ea]",
    badgeLeft: 271,
    badgeWidth: 135,
  },
  {
    id: 2,
    name: "Wallet Connect",
    address: "123C5C...92fE",
    badge: "Make primary",
    badgeClass: "bg-[#6450e9]",
    badgeLeft: 1074,
    badgeWidth: 169,
  },
];

export const notificationSettings = [
  { id: 1, label: "Price Alerts", defaultOn: true },
  { id: 2, label: "Startup Milestones", defaultOn: true },
  { id: 3, label: "New Listings", defaultOn: false },
  { id: 4, label: "Weekly Digest", defaultOn: false },
];

export const privacySettings = [
  {
    id: 1,
    icon: "globe",
    title: "Public Profile",
    description: "Anyone can view your profile page",
    defaultOn: true,
  },
  {
    id: 2,
    icon: "lock",
    title: "Show Portfolio Value",
    description: "Display your holdings and returns publicly",
    defaultOn: false,
  },
  {
    id: 3,
    icon: "users",
    title: "Show Investment Activity",
    description: "Let others see your buys and sells",
    defaultOn: true,
  },
  {
    id: 4,
    icon: "users",
    title: "Appear in Search",
    description: "Allow investors to find your profile",
    defaultOn: true,
  },
  {
    id: 5,
    icon: "shield",
    title: "Analytics & Data Sharing",
    description: "Share anonymized data to improve Calip",
    defaultOn: false,
  },
];

export const securityItems = [
  {
    id: 1,
    title: "Change Password",
    description: "Last changed 30 days ago",
    type: "arrow",
  },
  {
    id: 2,
    title: "Two-Factor Authentication",
    description: "Add an extra layer of security",
    type: "toggle",
    cta: "Set up →",
  },
  {
    id: 3,
    title: "Login activity",
    description: "Last login: Today 09:14 AM · India",
    type: "none",
  },
];

export const sessions = [
  {
    id: 1,
    icon: "chrome",
    title: "Chrome on macOS",
    location: "Ahmedabad, India · Active now",
    badge: "Current",
    tileBorder: "border-[#2f2763]",
  },
  {
    id: 2,
    icon: "phone",
    title: "Safari on iPhone",
    location: "Ahmedabad, India · 2h ago",
    tileBorder: "border-[#131622]",
  },
  {
    id: 3,
    icon: "monitor",
    title: "Chrome on Windows",
    location: "Maninagar, India · 3d ago",
    tileBorder: "border-[#131622]",
  },
];
