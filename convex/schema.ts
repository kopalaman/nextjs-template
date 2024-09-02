import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    name: v.string(),
    email: v.string(),
    phoneNumber: v.optional(v.string()),
    imageUrl: v.string(),
    role: v.optional(
      v.union(v.literal("user"), v.literal("seller"), v.literal("admin"))
    ),
    address: v.optional(
      v.object({
        street: v.string(),
        city: v.string(),
        state: v.string(),
        country: v.string(),
        postalCode: v.string(),
      })
    ),
    updatedAt: v.number(),
  })
    .index("byClerkId", ["clerkId"])
    .index("byEmail", ["email"]),
})
