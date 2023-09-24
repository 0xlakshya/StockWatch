import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

//     isin: string;
//     day_change: string;

function HoldingsTable(props: { data?: IHoldings[] | null }) {
  return (
    <div>
      <Table>
        <TableCaption>Your Holdings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Symbol</TableHead>
            <TableHead>Exchange</TableHead>
            <TableHead>Average Price</TableHead>
            <TableHead>Last Price</TableHead>
            <TableHead>Close Price</TableHead>
            <TableHead>ISIN</TableHead>
            <TableHead>PNL</TableHead>
            <TableHead>% Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.data?.map((holding, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                ${holding.tradingsymbol}
              </TableCell>
              <TableCell className="font-medium">{holding.exchange}</TableCell>
              <TableCell className="font-medium">
                {holding.average_price}
              </TableCell>
              <TableCell className="font-medium">
                {holding.last_price}
              </TableCell>
              <TableCell className="font-medium">
                {holding.close_price}
              </TableCell>
              <TableCell className="font-medium">{holding.isin}</TableCell>
              <TableCell className="font-medium">
                {" "}
                {parseInt(holding.pnl).toFixed(2)}
              </TableCell>
              <TableCell className="font-medium">
                {parseInt(holding.day_change_percentage).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default HoldingsTable;
