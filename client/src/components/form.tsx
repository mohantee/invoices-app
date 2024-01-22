import {
  UseFormHandleSubmit,
  SubmitHandler,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  FieldArrayWithId,
  UseFormRegister,
} from "react-hook-form";
import { Label, Input, Button } from "./ui";
import { Invoice } from "@/types";
import deleteIcon from "@/assets/delete.svg";
import { ReactNode } from "react";

type Props = {
  handleSubmit: UseFormHandleSubmit<Invoice, undefined>;
  fields: FieldArrayWithId<Invoice, "itemList", "id">[];
  append: UseFieldArrayAppend<Invoice, "itemList">;
  remove: UseFieldArrayRemove;
  register: UseFormRegister<Invoice>;
  actions: ReactNode;
};

export function Form({
  handleSubmit,
  fields,
  append,
  remove,
  register,
  actions,
}: Props) {
  const onSubmit: SubmitHandler<Invoice> = (data) => console.log(data);

  return (
    <form
      className="grid grid-cols-2 gap-10 sm:grid-cols-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-span-2 grid grid-cols-subgrid gap-4 sm:col-span-3">
        <p className="col-span-2 font-bold text-primary">Bill From</p>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-3">
          <Label htmlFor="senderStreetAddress">Street Address</Label>
          <Input
            id="senderStreetAddress"
            {...register("senderStreetAddress")}
          />
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <Label htmlFor="senderCity">City</Label>
          <Input id="senderCity" {...register("senderCity")} />
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <Label htmlFor="senderPostCode">Post Code</Label>
          <Input id="senderPostCode" {...register("senderPostCode")} />
        </div>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-1">
          <Label htmlFor="senderCountry">Country</Label>
          <Input id="senderCountry" {...register("senderCountry")} />
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-subgrid gap-4 sm:col-span-3 sm:grid-cols-12">
        <p className="col-span-2 font-bold text-primary sm:col-span-12">
          Bill To
        </p>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-12">
          <Label htmlFor="clientName">Client's Name</Label>
          <Input id="clientName" {...register("clientName")} />
        </div>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-12">
          <Label htmlFor="clientEmail">Client's Email</Label>
          <Input id="clientEmail" {...register("clientEmail")} />
        </div>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-12">
          <Label htmlFor="clientStreetAddress">Street Address</Label>
          <Input
            id="clientStreetAddress"
            {...register("clientStreetAddress")}
          />
        </div>
        <div className="col-span-1 flex flex-col gap-2 sm:col-span-4">
          <Label htmlFor="clientCity">City</Label>
          <Input id="clientCity" {...register("clientCity")} />
        </div>
        <div className="col-span-1 flex flex-col gap-2 sm:col-span-4">
          <Label htmlFor="clientPostCode">Post Code</Label>
          <Input id="clientPostCode" {...register("clientPostCode")} />
        </div>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-4">
          <Label htmlFor="clientCountry">Country</Label>
          <Input id="clientCountry" {...register("clientCountry")} />
        </div>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-6">
          <Label htmlFor="invoiceDate">Invoice Date</Label>
          <Input id="invoiceDate" {...register("invoiceDate")} />
        </div>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-6">
          <Label htmlFor="paymentTerms">Payment Terms</Label>
          <Input id="paymentTerms" {...register("paymentTerms")} />
        </div>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-12">
          <Label htmlFor="projectDescription">Project Description</Label>
          <Input id="projectDescription" {...register("projectDescription")} />
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-6 gap-4 sm:col-span-3 sm:grid-cols-12">
        <p className="col-span-6 text-lg font-bold text-[#777F98] sm:col-span-12">
          Item List
        </p>
        <ul className="col-span-6 grid gap-6 sm:col-span-12">
          {fields.map((item, index) => (
            <li
              key={item.id}
              className="grid grid-cols-6 gap-4 sm:grid-cols-12"
            >
              <div className="col-span-6 flex flex-col gap-2 sm:col-span-4">
                <Label htmlFor={`itemList.${index}.name`}>Item Name</Label>
                <Input
                  id={`itemList.${index}.name`}
                  {...register(`itemList.${index}.name`)}
                />
              </div>
              <div className="col-span-2 flex min-w-16 flex-col gap-2 sm:col-span-2">
                <Label htmlFor={`itemList.${index}.quantity`}>Qty.</Label>
                <Input
                  id={`itemList.${index}.quantity`}
                  {...register(`itemList.${index}.quantity`)}
                />
              </div>
              <div className="col-span-2 flex flex-col gap-2 sm:col-span-3">
                <Label htmlFor={`itemList.${index}.price`}>Price</Label>
                <Input
                  id={`itemList.${index}.price`}
                  {...register(`itemList.${index}.price`)}
                />
              </div>
              <div className="col-span-2 flex flex-col gap-2 sm:col-span-3">
                <Label>Total</Label>
                <div className="my-auto flex items-center justify-between">
                  <p className="text-neutral-6">400.00</p>
                  <img
                    src={deleteIcon}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => remove(index)}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Button
          variant="ghost"
          className="col-span-6 text-neutral-7 sm:col-span-12"
          onClick={() => append({ name: "", price: 0, quantity: 0, total: 0 })}
        >
          + Add New Item
        </Button>
      </div>
      {actions}
    </form>
  );
}
