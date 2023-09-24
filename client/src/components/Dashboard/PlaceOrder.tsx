import React from "react";
import { Button } from "../ui/button";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import toast from "react-hot-toast";

function PlaceOrder(props: {
  submitOrder?: (val: placeOrderFormDataModel) => void;
}) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      symbol: e.target.elements.symbol.value,
      quantity: e.target.elements.quantity.value,
      price: e.target.elements.price.value,
    };
    if (props.submitOrder) props.submitOrder(formData);
    toast.success("Order Placed");
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardHeader>
        <CardTitle>Place Order</CardTitle>
        <CardDescription>Buy your token here</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="symbol">
              Symbol <sup>*</sup>
            </Label>
            <Input id="symbol" placeholder="$APPL" required />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">
              Price <sup>*</sup>
            </Label>
            <Input id="price" placeholder="$1110" required type="number" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="quantity">
              Quantity <sup>*</sup>
            </Label>
            <Input id="quantity" placeholder="1" required type="number" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </CardFooter>
    </form>
  );
}

export default PlaceOrder;
