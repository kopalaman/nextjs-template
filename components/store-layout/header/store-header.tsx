import React from "react"

import Logo from "@/components/ui/logo"

import Navbar from "./navbar"
import { Searchbar } from "./searchbar"

export default function StoreHeader() {
  return (
    <>
      {/* <HeaderBanner /> */}
      <header className="sticky w-full container-fluid z-20 pt-1 flex flex-col">
        <div className=" flex h-14 items-center justify-between border-b border-muted pb-1">
          <Logo className="h-12 mr-2" />
          {/* <Location /> */}
          <Searchbar />
          <Navbar />
        </div>
      </header>
    </>
  )
}
