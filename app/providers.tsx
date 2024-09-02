"use client"

import { ClerkProvider, useAuth } from "@clerk/nextjs"
import { ConvexReactClient } from "convex/react"
import { ConvexProviderWithClerk } from "convex/react-clerk"

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL! as string
)
const clerkPuk = process.env.NEXT_PUBLIC_CLERK_PUBLIC_KEY!

export default function AuthProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ClerkProvider publishableKey={clerkPuk}>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          {children}
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </>
  )
}
