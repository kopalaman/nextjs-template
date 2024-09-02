import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <div className="flex flex-col items-center md:items-start ">
      <span className="text-muted-foreground mb-1 text-xs">
        Sign up for our Newsletter
      </span>
      <div className="flex items-center space-x-2">
        <Input
          type="email"
          placeholder="Email Address"
          aria-label="Email for newsletter"
        />
        <Button variant="outline">Subscribe</Button>
      </div>
    </div>
  )
}
