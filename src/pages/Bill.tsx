/**
 * v0 by Vercel.
 * @see https://v0.app/t/N2acbbnxUuK
 * Documentation: https://v0.app/docs#integrating-generated-code-into-your-nextjs-app
 */

import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Link } from "react-router-dom"
import type { SVGProps } from "react"
import type { JSX } from "react/jsx-runtime"

export default function Bill() {
  return (
    <main className="h-screen w-full flex flex-col">
      <header className="flex justify-between items-center h-14 px-6 bg-gray-100 shadow-md">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <FacebookIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Company Name</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link href="#" className="text-sm text-gray-500 hover:text-black" prefetch={false}>
                Dashboard
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="#" className="text-sm text-gray-500 hover:text-black" prefetch={false}>
                Settings
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <section className="p-6 flex-grow">
        <Card>
          <CardHeader>
            <CardTitle>Subscription Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">Premium Plan</span>
              <span className="text-xl font-semibold">$19.99 / month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Payment Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" required />
              </div>
              <div className="flex justify-between space-x-4">
                <div className="space-y-2 w-1/2">
                  <Label htmlFor="expirationDate">Expiration Date</Label>
                  <Input id="expirationDate" required />
                </div>
                <div className="space-y-2 w-1/2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" required />
                </div>
              </div>
            </div>
            <CardFooter>
              <Button>Update Payment Information</Button>
            </CardFooter>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>12/31/2023</TableCell>
                  <TableCell>Subscription Fee</TableCell>
                  <TableCell>$19.99</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Cancel Subscription</CardTitle>
          </CardHeader>
          <CardContent>
            <span>
              If you wish to cancel your subscription, please click the button below. Note that you will lose all the
              benefits of your current plan.
            </span>
            <Button variant="outline" className="mt-4">
              Cancel Subscription
            </Button>
          </CardContent>
        </Card>
      </section>
      <footer className="h-16 flex items-center justify-center text-sm text-gray-500 bg-gray-100">
        <Link href="#" className="mx-2" prefetch={false}>
          Terms of Service
        </Link>
        <span>|</span>
        <Link href="#" className="mx-2" prefetch={false}>
          Privacy Policy
        </Link>
      </footer>
    </main>
  )
}

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}