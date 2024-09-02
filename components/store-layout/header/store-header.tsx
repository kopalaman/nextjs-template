import React from "react"

import Logo from "@/components/ui/logo"

import Navbar from "./navbar"
import { Searchbar } from "./searchbar"

export default function StoreHeader() {
  return (
    <>
      {/* <HeaderBanner /> */}
      <header className="container-fluid sticky z-20 flex w-full flex-col pt-1">
        <div className=" border-muted flex h-14 items-center justify-between border-b pb-1">
          <Logo className="mr-2 h-12" />
          {/* <Location /> */}
          <Searchbar />
          <Navbar />
        </div>
      </header>
    </>
  )
}
