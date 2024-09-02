import { UserJSON } from "@clerk/nextjs/server"
import { v, Validator } from "convex/values"

import { internalMutation, query, QueryCtx } from "./_generated/server"

// There are also a few helpers in this file:

// * current exposes the user information to the client, which will helps the client determine whether the webhook already succeeded
// * upsertFromClerk will be called when a user signs up or when they update their account
// * deleteFromClerk will be called when a user deletes their account via Clerk UI from your app
// * getCurrentUserOrThrow retrieves the currently logged-in user or throws an error
// * getCurrentUser retrieves the currently logged-in user or returns null
// * userByExternalId retrieves a user given the Clerk ID, and is used only for retrieving the current user or when updating an existing user via the webhook

export const current = query({
  args: {},
  handler: async (ctx) => {
    return await getCurrentUser(ctx)
  },
})

export const upsertFromClerk = internalMutation({
  args: { data: v.any() as Validator<UserJSON> }, // no runtime validation, trust Clerk
  async handler(ctx, { data }) {
    const userAttributes = {
      name: `${data.first_name} ${data.last_name}`,
      clerkId: data.id,
      email: data.email_addresses[0]?.email_address ?? "",
      imageUrl: data.image_url ?? "",
      role: "user" as const, // Default role, adjust as needed
      updatedAt: data.updated_at,
    }
    const user = await userByClerkId(ctx, data.id)
    if (user === null) {
      await ctx.db.insert("users", userAttributes)
    } else {
      await ctx.db.patch(user._id, userAttributes)
    }
  },
})

export const deleteFromClerk = internalMutation({
  args: { clerkUserId: v.string() },
  async handler(ctx, { clerkUserId }) {
    const user = await userByClerkId(ctx, clerkUserId)

    if (user !== null) {
      await ctx.db.delete(user._id)
    } else {
      console.warn(
        `Can't delete user, there is none for Clerk user ID: ${clerkUserId}`
      )
    }
  },
})

export async function getCurrentUserOrThrow(ctx: QueryCtx) {
  const userRecord = await getCurrentUser(ctx)
  if (!userRecord) throw new Error("Can't get current user")
  return userRecord
}

export async function getCurrentUser(ctx: QueryCtx) {
  const identity = await ctx.auth.getUserIdentity()
  if (identity === null) {
    return null
  }
  return await userByClerkId(ctx, identity.subject)
}

async function userByClerkId(ctx: QueryCtx, externalId: string) {
  return await ctx.db
    .query("users")
    .withIndex("byClerkId", (q) => q.eq("clerkId", externalId))
    .unique()
}
