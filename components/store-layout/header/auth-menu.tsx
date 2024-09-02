"use client"

import React from "react"
import { SignInButton, UserButton } from "@clerk/nextjs"
import { Authenticated, Unauthenticated } from "convex/react"

import { Button } from "@/components/ui/button"

export default function AuthMenu() {
  return (
    <>
      <Unauthenticated>
        <Button size={"sm"} asChild>
          <SignInButton>login or register</SignInButton>
        </Button>
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>
    </>
  )
}
