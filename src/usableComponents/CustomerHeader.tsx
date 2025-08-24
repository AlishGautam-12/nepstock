import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function CustomerHeader() {
  return (
    <div className="flex items-center gap-4 mb-6">
      <Link to={"/customer"}>
        <Button variant="ghost" size="sm" className="p-2">
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </Link>
      <h1 className="text-xl font-semibold">Add Customer</h1>
    </div>
  )
}
