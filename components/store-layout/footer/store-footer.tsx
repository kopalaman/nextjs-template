"use client"

import React from "react"
import Link from "next/link"
import { SocialIcon } from "react-social-icons"

import Logo from "@/components/ui/logo"
import { ThemeToggle } from "@/components/theme-toggle"

import Newsletter from "./newsletter"

const FooterSection = ({ title, links }: { title: string; links: any }) => (
  <div>
    <h2 className="text-base font-semibold mb-4">{title}</h2>
    <ul className="space-y-2">
      {links.map((link: any, index: any) => (
        <li key={index}>
          <Link
            href={link.href}
            className="hover:text-primary text-muted-foreground  transition-colors text-sm"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: "Product",
      links: [
        { href: "#", text: "Features" },
        { href: "#", text: "Pricing" },
        { href: "#", text: "Integrations" },
        { href: "#", text: "Changelog" },
        { href: "#", text: "Docs" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Blog" },
        { href: "#", text: "Customers" },
        { href: "#", text: "Enterprise" },
        { href: "#", text: "Partners" },
        { href: "#", text: "Careers" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About" },
        { href: "#", text: "Leadership" },
        { href: "#", text: "Contact" },
        { href: "#", text: "Press" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "#", text: "Privacy Policy" },
        { href: "#", text: "Terms of Service" },
        { href: "#", text: "Trademark Policy" },
        { href: "#", text: "Inactivity Policy" },
      ],
    },
  ]

  const socialLinks = [
    "https://linkedin.com",
    "https://facebook.com",
    "https://twitter.com",
    "https://slack.com",
  ]

  return (
    <footer className="bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto  grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0  mb-8">
          <div className="inline-block md:flex col-span-2 md:col-span-1">
            <div className="flex md:flex-col items-center md:items-start justify-between gap-2">
              <Link href="/">
                <Logo />
              </Link>
              <ThemeToggle />
            </div>
          </div>
          {sections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <div className="border-t  pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="flex flex-col items-center md:items-start  mb-4 md:mb-0">
              <span className="text-xs text-muted-foreground mb-1">
                Follow us on
              </span>
              <div className="space-x-3">
                {socialLinks.map((url, index) => (
                  <SocialIcon
                    key={index}
                    url={url}
                    style={{ height: 40, width: 40 }}
                  />
                ))}
              </div>
            </div>
            <Newsletter />
          </div>
          <div className="text-center md:text-left text-sm text-muted-foreground mt-4">
            <p>&copy; {currentYear} Marliket. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
