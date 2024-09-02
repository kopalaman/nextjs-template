"use client"

import React from "react"
import Link from "next/link"
import { SocialIcon } from "react-social-icons"

import Logo from "@/components/ui/logo"
import { ThemeToggle } from "@/components/theme-toggle"

import Newsletter from "./newsletter"

const FooterSection = ({ title, links }: { title: string; links: any }) => (
  <div>
    <h2 className="mb-4 text-base font-semibold">{title}</h2>
    <ul className="space-y-2">
      {links.map((link: any, index: any) => (
        <li key={index}>
          <Link
            href={link.href}
            className="hover:text-primary text-muted-foreground  text-sm transition-colors"
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
        <div className="mx-auto mb-8  grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-5  md:gap-0">
          <div className="col-span-2 inline-block md:col-span-1 md:flex">
            <div className="flex items-center justify-between gap-2 md:flex-col md:items-start">
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
        <div className="mt-8  border-t pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row ">
            <div className="mb-4 flex flex-col items-center  md:mb-0 md:items-start">
              <span className="text-muted-foreground mb-1 text-xs">
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
          <div className="text-muted-foreground mt-4 text-center text-sm md:text-left">
            <p>&copy; {currentYear} Marliket. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
