/**
 * v0 by Vercel.
 * @see https://v0.app/t/tDRagknPDGe
 * Documentation: https://v0.app/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useMemo } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function History() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const transactions = [
    {
      id: 1,
      date: "2023-05-01",
      description: "Monthly Subscription",
      amount: 9.99,
      status: "Completed",
    },
    {
      id: 2,
      date: "2023-04-15",
      description: "Online Purchase",
      amount: 49.99,
      status: "Completed",
    },
    {
      id: 3,
      date: "2023-03-30",
      description: "Utility Bill",
      amount: 75.0,
      status: "Pending",
    },
    {
      id: 4,
      date: "2023-02-20",
      description: "Refund",
      amount: -25.0,
      status: "Completed",
    },
    {
      id: 5,
      date: "2023-01-10",
      description: "Payroll",
      amount: 2500.0,
      status: "Completed",
    },
    {
      id: 6,
      date: "2022-12-05",
      description: "Online Purchase",
      amount: 99.99,
      status: "Completed",
    },
    {
      id: 7,
      date: "2022-11-25",
      description: "Subscription Renewal",
      amount: 9.99,
      status: "Completed",
    },
    {
      id: 8,
      date: "2022-10-01",
      description: "Utility Bill",
      amount: 80.0,
      status: "Pending",
    },
  ]
  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      if (selectedStatus !== "all" && transaction.status !== selectedStatus) {
        return false
      }
      return (
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.amount.toString().includes(searchTerm) ||
        transaction.date.includes(searchTerm)
      )
    })
  }, [transactions, searchTerm, selectedStatus])
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
        <CardDescription>View your past transactions.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4 mt-6">
          <Input
            type="search"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-sm"
          />
          <Select value={selectedStatus}  onValueChange={(value) => setSelectedStatus(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell className={`${transaction.amount < 0 ? "text-red-500" : "text-green-500"}`}>
                  {transaction.amount.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Badge variant={transaction.status === "Completed" ? "secondary" : "outline"}>
                    {transaction.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}