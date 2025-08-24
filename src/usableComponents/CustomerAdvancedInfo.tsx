import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Props {
  formData: any
  handleInputChange: (field: string, value: string) => void
}

export function CustomerAdvancedInfo({ formData, handleInputChange }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Advanced Customer Details</CardTitle>
        <p className="text-sm text-muted-foreground">Enter Advanced Customer details</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="customerId">Customer ID</Label>
              <Input
                id="customerId"
                placeholder="Enter Customer ID"
                value={formData.customerId}
                onChange={(e) => handleInputChange("customerId", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="storeLocation">Store Location</Label>
              <Input
                id="storeLocation"
                placeholder="Enter Store Location"
                value={formData.storeLocation}
                onChange={(e) => handleInputChange("storeLocation", e.target.value)}
              />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Input
                id="paymentMethod"
                placeholder="Enter Payment Method"
                value={formData.paymentMethod}
                onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deliveryPreferences">Delivery Preferences</Label>
              <Select
                value={formData.deliveryPreferences}
                onValueChange={(value) => handleInputChange("deliveryPreferences", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Door-to-door Delivery">Door-to-door Delivery</SelectItem>
                  <SelectItem value="Pickup">Pickup</SelectItem>
                  <SelectItem value="Express Delivery">Express Delivery</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-6 space-y-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            id="notes"
            placeholder="Enter Notes"
            className="min-h-[100px]"
            value={formData.notes}
            onChange={(e) => handleInputChange("notes", e.target.value)}
          />
        </div>
      </CardContent>
    </Card>
  )
}
