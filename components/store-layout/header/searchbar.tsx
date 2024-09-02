import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Searchbar() {
  return (
    <div className="flex flex-grow w-full max-w-sm items-center">
      <Input
        type="email"
        placeholder="Search for products..."
        className="border-r-0 rounded-r-none"
      />
      <Button
        type="submit"
        variant={"outline"}
        className="border-l-0 rounded-l-none"
      >
        Search...
      </Button>
    </div>
  )
}
