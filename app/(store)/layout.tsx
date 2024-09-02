import type { Metadata } from "next"
import { Store } from "lucide-react"

import { siteConfig } from "@/config/site"
import StoreFooter from "@/components/store-layout/footer/store-footer"
import StoreHeader from "@/components/store-layout/header/store-header"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function StoreLayout({ children }: RootLayoutProps) {
  return (
    <>
      <StoreHeader />
      <div className="flex-1">{children}</div>
      <StoreFooter />
    </>
  )
}
