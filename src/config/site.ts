import { SiteConfig, ContactConfig } from "@/types/app"

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "https://histoverse.org"

export const siteConfig: SiteConfig = {
  name: "Histoverse",
  author: "andyvaulin",
  description:
    "Learning History with AI,",
  keywords: [
    "History",
    "Education",
    "Web3",
    "ICP",
    "Blockchain",
    "AI",
    "AI Tutor",
    "AI lesson creation",
    "AI course creation",
    "AI History",
  ],
  url: {
    base: baseUrl,
    author: "https://redpangilinan.live",
  },
  ogImage: `${baseUrl}/og.jpg`,
}

export const contactConfig: ContactConfig = {
  email: "andy.vaulin@gmail.com",
}
