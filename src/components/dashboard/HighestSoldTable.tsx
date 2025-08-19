import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const rows = [
  { id: 1, name: "Potato", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.1200", sold: 123 },
  { id: 2, name: "Tomato", expiry: "2083/2/12", batch: "13", stock: "42/80", price: "Rs.800", sold: 98 },
{ id: 3, name: "Potato", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.1200", sold: 123 },
  { id: 4, name: "Tomato", expiry: "2083/2/12", batch: "13", stock: "42/80", price: "Rs.800", sold: 98 },
  { id: 5, name: "Potato", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.1200", sold: 123 },
  { id: 6, name: "Tomato", expiry: "2083/2/12", batch: "13", stock: "42/80", price: "Rs.800", sold: 98 },
  { id: 7, name: "Potato", expiry: "2083/2/12", batch: "12", stock: "56/100", price: "Rs.1200", sold: 123 },
  { id: 8, name: "Tomato", expiry: "2083/2/12", batch: "13", stock: "42/80", price: "Rs.800", sold: 98 },
];

export default function HighestSoldTable() {
  return (
    <div className="mt-6">
      <h2 className="font-semibold mb-2">Highest Sold Items</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S.N</TableHead>
            <TableHead>Item Name</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead>Batch No</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Price/Unit</TableHead>
            <TableHead>Total Sold</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.expiry}</TableCell>
              <TableCell>{row.batch}</TableCell>
              <TableCell>{row.stock}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.sold}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
