import { Button } from "@/components/ui/button"

export function CustomerActions() {
  return (
    <div className="flex justify-center gap-4 pt-4">
      <Button variant="outline" className="px-8 bg-transparent">
        Cancel
      </Button>
      <Button variant="outline" className="px-8 bg-transparent">
        History
      </Button>
      <Button className="px-8 bg-blue-600 hover:bg-blue-700">Save</Button>
    </div>
  )
}
