import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Searchbar() {
  return (
    <div className="flex w-full max-w-sm grow items-center">
      <Input
        type="email"
        placeholder="Search for products..."
        className="rounded-r-none border-r-0"
      />
      <Button
        type="submit"
        variant={"outline"}
        className="rounded-l-none border-l-0"
      >
        Search...
      </Button>
    </div>
  )
}
