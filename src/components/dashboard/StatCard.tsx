import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color?: string;
}

export  function StatCard({ title, value, icon: Icon, color }: StatCardProps) {
  return (
    <Card className="p-4 flex items-center gap-4 shadow-md">
      <div className={`p-3 rounded-full ${color || "bg-gray-100"}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <CardContent>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </CardContent>
    </Card>
  );
}
export default StatCard; // <-- default export