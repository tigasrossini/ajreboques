import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Mail,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const tableData = [
  {
    id: 1,
    source: "Email Source",
    icon: <Mail className="h-6 w-6 text-gray-500" />,
    views: "2,454",
    allSales: "985",
    freeSales: "985",
    paymentSales: "985",
    avgTime: "7 min 32 sec",
    conversion: "0.54%",
    revenue: "$ 2,544.33",
    isSelected: false,
  },
  {
    id: 2,
    source: "www.google.com",
    icon: <ExternalLink className="h-6 w-6 text-gray-500" />,
    views: "2,454",
    allSales: "758",
    freeSales: "758",
    paymentSales: "758",
    avgTime: "5 min 43 sec",
    conversion: "0.65%",
    revenue: "$ 1,544.33",
    isSelected: false,
  },
  {
    id: 3,
    source: "www.pinterest.com",
    icon: <ExternalLink className="h-6 w-6 text-gray-500" />,
    views: "2,454",
    allSales: "695",
    freeSales: "695",
    paymentSales: "695",
    avgTime: "5 min 37 sec",
    conversion: "0.76%",
    revenue: "$ 4,544.33",
    isSelected: false,
  },
  {
    id: 4,
    source: "www.facebook.com",
    icon: <ExternalLink className="h-6 w-6 text-gray-500" />,
    views: "2,454",
    allSales: "921",
    freeSales: "921",
    paymentSales: "921",
    avgTime: "6 min 11 sec",
    conversion: "0.87%",
    revenue: "$ 2,544.33",
    isSelected: true,
  },
  {
    id: 5,
    source: "www.google.com",
    icon: <ExternalLink className="h-6 w-6 text-gray-500" />,
    views: "2,454",
    allSales: "798",
    freeSales: "798",
    paymentSales: "798",
    avgTime: "1 min 32 sec",
    conversion: "0.54%",
    revenue: "$ 3,544.33",
    isSelected: false,
  },
];

export const ReferralSourceTable = () => {
  return (
    <Card className="border-gray-200 shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead className="text-xs font-bold text-gray-800">
                <div className="flex items-center gap-2">
                  Referral Source
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
              </TableHead>
              <TableHead className="text-xs font-bold text-gray-800 w-24">
                <div className="flex items-center gap-2">
                  Views
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
              </TableHead>
              <TableHead className="text-xs font-bold text-gray-800 w-28">
                <div className="flex items-center gap-2">
                  All Sales
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
              </TableHead>
              <TableHead className="text-xs font-bold text-gray-800 w-28">
                <div className="flex items-center gap-2">
                  Free Sales
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
              </TableHead>
              <TableHead className="text-xs font-bold text-gray-800 w-32">
                <div className="flex items-center gap-2">
                  Payment Sales
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
              </TableHead>
              <TableHead className="text-xs font-bold text-gray-800 w-28">
                <div className="flex items-center gap-2">
                  Avr. Time
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
              </TableHead>
              <TableHead className="text-xs font-bold text-gray-800 w-32">
                <div className="flex items-center gap-2">
                  Conversion
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
              </TableHead>
              <TableHead className="text-xs font-bold text-gray-800 w-28">
                <div className="flex items-center gap-2">
                  Revenue
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                className={row.isSelected ? "bg-gray-50" : ""}
              >
                <TableCell>
                  <Checkbox checked={row.isSelected} />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {row.icon}
                    <span className="text-xs font-bold text-gray-800">
                      {row.source}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-xs font-bold text-gray-800">
                  {row.views}
                </TableCell>
                <TableCell className="text-xs font-bold text-gray-800">
                  {row.allSales}
                </TableCell>
                <TableCell className="text-xs font-bold text-gray-800">
                  {row.freeSales}
                </TableCell>
                <TableCell className="text-xs font-bold text-gray-800">
                  {row.paymentSales}
                </TableCell>
                <TableCell className="text-xs font-bold text-gray-800">
                  {row.avgTime}
                </TableCell>
                <TableCell className="text-xs font-bold text-gray-800">
                  {row.conversion}
                </TableCell>
                <TableCell className="text-xs font-bold text-gray-800">
                  {row.revenue}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between p-4 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-4">
            {[1, 2, 3, "...", 21].map((page, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0 rounded-full"
              >
                <span className="text-xs font-bold">{page}</span>
              </Button>
            ))}
          </div>
        </div>

        <Button variant="outline" size="sm" className="h-8">
          <span className="text-xs font-bold">Load More</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="h-8 w-8 p-0 rounded-full"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </Card>
  );
};
