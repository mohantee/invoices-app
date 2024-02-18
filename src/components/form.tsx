import {
  UseFormHandleSubmit,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  FieldArrayWithId,
  UseFormRegister,
  Control,
  Controller,
  UseFormWatch,
  FieldErrors,
} from "react-hook-form";
import { InvoiceFormValues } from "@/types";
import deleteIcon from "@/assets/delete.svg";
import { ReactNode } from "react";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/utils/cn";

type Props = {
  edit?: boolean;
  handleSubmit: UseFormHandleSubmit<InvoiceFormValues, undefined>;
  fields: FieldArrayWithId<InvoiceFormValues, "itemList", "id">[];
  append: UseFieldArrayAppend<InvoiceFormValues, "itemList">;
  remove: UseFieldArrayRemove;
  register: UseFormRegister<InvoiceFormValues>;
  actions: ReactNode;
  control: Control<InvoiceFormValues, any>;
  watch: UseFormWatch<InvoiceFormValues>;
  errors: FieldErrors<InvoiceFormValues>;
  onSubmit: (data: InvoiceFormValues) => void;
};

const paymentTermsItems = [
  "Next 1 day",
  "Next 7 days",
  "Next 14 days",
  "Next 30 days",
];

export function Form({
  edit,
  handleSubmit,
  fields,
  append,
  remove,
  register,
  actions,
  control,
  watch,
  onSubmit,
  errors,
}: Props) {
  return (
    <form
      className="grid grid-cols-2 gap-10 sm:grid-cols-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-span-2 grid grid-cols-subgrid gap-4 sm:col-span-3">
        <p className="col-span-2 font-bold text-primary">Bill From</p>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-3">
          <div className="flex items-baseline justify-between text-[10px] text-danger">
            <Label
              htmlFor="senderStreetAddress"
              className={cn(errors.senderStreetAddress && "text-danger")}
            >
              Street Address
            </Label>
            <p className="leading-none">
              {errors.senderStreetAddress && errors.senderStreetAddress.message}
            </p>
          </div>
          <Input
            id="senderStreetAddress"
            {...register("senderStreetAddress")}
            className={cn(errors.senderStreetAddress && "border-danger")}
          />
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <div className="flex items-baseline justify-between text-[10px] text-danger">
            <Label
              htmlFor="senderCity"
              className={cn(errors.senderCity && "text-danger")}
            >
              City
            </Label>
            <p className="leading-none">
              {errors.senderCity && errors.senderCity.message}
            </p>
          </div>
          <Input
            id="senderCity"
            {...register("senderCity")}
            className={cn(errors.senderCity && "border-danger")}
          />
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <div className="flex items-baseline justify-between text-[10px] text-danger">
            <Label
              htmlFor="senderPostCode"
              className={cn(errors.senderPostCode && "text-danger")}
            >
              Post Code
            </Label>
            <p className="leading-none">
              {errors.senderPostCode && errors.senderPostCode.message}
            </p>
          </div>
          <Input
            id="senderPostCode"
            {...register("senderPostCode")}
            className={cn(errors.senderPostCode && "border-danger")}
          />
        </div>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-1">
          <div className="flex items-baseline justify-between text-[10px] text-danger">
            <Label
              htmlFor="senderCountry"
              className={cn(errors.senderCountry && "text-danger")}
            >
              Country
            </Label>
            <p className="leading-none">
              {errors.senderCountry && errors.senderCountry.message}
            </p>
          </div>
          <Input
            id="senderCountry"
            {...register("senderCountry")}
            className={cn(errors.senderCountry && "border-danger")}
          />
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-subgrid gap-4 sm:col-span-3 sm:grid-cols-12">
        <p className="col-span-2 font-bold text-primary sm:col-span-12">
          Bill To
        </p>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-12">
          <div className="flex items-baseline justify-between text-[10px] text-danger">
            <Label
              htmlFor="clientName"
              className={cn(errors.clientName && "text-danger")}
            >
              Name
            </Label>
            <p className="leading-none">
              {errors.clientName && errors.clientName.message}
            </p>
          </div>
          <Input
            id="clientName"
            {...register("clientName")}
            className={cn(errors.clientName && "border-danger")}
          />
        </div>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-12">
          <div className="flex items-baseline justify-between text-[10px] text-danger">
            <Label
              htmlFor="clientName"
              className={cn(errors.clientEmail && "text-danger")}
            >
              Email
            </Label>
            <p className="leading-none">
              {errors.clientEmail && errors.clientEmail.message}
            </p>
          </div>
          <Input
            id="clientEmail"
            {...register("clientEmail")}
            className={cn(errors.clientEmail && "border-danger")}
          />
        </div>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-12">
          <div className="flex items-baseline justify-between text-[10px] text-danger">
            <Label
              htmlFor="clientStreetAddress"
              className={cn(errors.clientStreetAddress && "text-danger")}
            >
              Street Address
            </Label>
            <p className="leading-none">
              {errors.clientStreetAddress && errors.clientStreetAddress.message}
            </p>
          </div>
          <Input
            id="clientStreetAddress"
            {...register("clientStreetAddress")}
            className={cn(errors.clientStreetAddress && "border-danger")}
          />
        </div>
        <div className="col-span-1 flex flex-col gap-2 sm:col-span-4">
          <div className="flex items-baseline justify-between text-[10px] text-danger">
            <Label
              htmlFor="clientCity"
              className={cn(errors.clientCity && "text-danger")}
            >
              City
            </Label>
            <p className="leading-none">
              {errors.clientCity && errors.clientCity.message}
            </p>
          </div>
          <Input
            id="clientCity"
            {...register("clientCity")}
            className={cn(errors.clientCity && "border-danger")}
          />
        </div>
        <div className="col-span-1 flex flex-col gap-2 sm:col-span-4">
          <div className="flex items-baseline justify-between text-[10px] text-danger">
            <Label
              htmlFor="clientPostCode"
              className={cn(errors.clientPostCode && "text-danger")}
            >
              Code
            </Label>
            <p className="leading-none">
              {errors.clientPostCode && errors.clientPostCode.message}
            </p>
          </div>
          <Input
            id="clientPostCode"
            {...register("clientPostCode")}
            className={cn(errors.clientPostCode && "border-danger")}
          />
        </div>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-4">
          <div className="flex items-baseline justify-between text-[10px] text-danger">
            <Label
              htmlFor="clientCountry"
              className={cn(errors.clientCountry && "text-danger")}
            >
              Country
            </Label>
            <p className="leading-none">
              {errors.clientCountry && errors.clientCountry.message}
            </p>
          </div>
          <Input
            id="clientCountry"
            {...register("clientCountry")}
            className={cn(errors.clientCountry && "border-danger")}
          />
        </div>

        <div className="col-span-2 flex flex-col gap-2 sm:col-span-6">
          <Label htmlFor="invoiceDate">Invoice Date</Label>
          <Controller
            name="invoiceDate"
            control={control}
            render={({ field }) => {
              return (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className="justify-start rounded border border-neutral-5 px-5 shadow-none dark:border-0 dark:bg-neutral-4 dark:text-white"
                      disabled={edit}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 shadow-5xl dark:border-0 dark:bg-neutral-4 dark:text-white">
                    <Calendar
                      mode="single"
                      hideHead={true}
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              );
            }}
          />
        </div>

        <div className="col-span-2 flex flex-col gap-2 sm:col-span-6">
          <Label htmlFor="paymentTerms">Payment Terms</Label>
          <Controller
            name="paymentTerms"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue
                    className="rounded px-5 py-[10px] font-bold"
                    placeholder="Select a verified email to display"
                  />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {paymentTermsItems.map((item) => (
                    <SelectItem
                      key={item}
                      value={item}
                      className="border-b border-neutral-5 px-5 py-4 font-bold transition-all last:border-b-0 hover:text-primary dark:border-neutral-8"
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="col-span-2 flex flex-col gap-2 sm:col-span-12">
          <div className="flex items-baseline justify-between text-[10px] text-danger">
            <Label
              htmlFor="projectDescription"
              className={cn(errors.projectDescription && "text-danger")}
            >
              Project Description
            </Label>
            <p className="leading-none">
              {errors.projectDescription && errors.projectDescription.message}
            </p>
          </div>
          <Input
            id="projectDescription"
            {...register("projectDescription")}
            className={cn(errors.projectDescription && "border-danger")}
          />
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
                <div className="flex items-baseline justify-between text-[10px] text-danger">
                  <Label
                    htmlFor={`itemList.${index}.name`}
                    className={cn(
                      errors.itemList?.[index]?.name && "text-danger",
                    )}
                  >
                    Item Name
                  </Label>
                  <p className="leading-none">
                    {errors.itemList?.[index]?.name &&
                      errors.itemList?.[index]?.name?.message}
                  </p>
                </div>
                <Input
                  id={`itemList.${index}.name`}
                  {...register(`itemList.${index}.name`)}
                  className={cn(
                    errors.itemList?.[index]?.name && "border-danger",
                  )}
                />
              </div>
              <div className="col-span-2 flex min-w-16 flex-col gap-2 sm:col-span-2">
                <Label
                  htmlFor={`itemList.${index}.quantity`}
                  className={cn(
                    errors.itemList?.[index]?.quantity && "text-danger",
                  )}
                >
                  Qty.
                </Label>
                <Input
                  id={`itemList.${index}.quantity`}
                  {...register(`itemList.${index}.quantity`)}
                  className={cn(
                    errors.itemList?.[index]?.quantity && "border-danger",
                  )}
                />
              </div>
              <div className="col-span-2 flex flex-col gap-2 sm:col-span-3">
                <Label
                  htmlFor={`itemList.${index}.price`}
                  className={cn(
                    errors.itemList?.[index]?.price && "text-danger",
                  )}
                >
                  Price
                </Label>
                <Input
                  id={`itemList.${index}.price`}
                  {...register(`itemList.${index}.price`)}
                  className={cn(
                    errors.itemList?.[index]?.price && "border-danger",
                  )}
                />
              </div>
              <div className="col-span-2 flex flex-col gap-2 sm:col-span-3">
                <Label>Total</Label>
                <div className="my-auto flex items-center justify-between">
                  <p className="text-neutral-6">
                    £
                    {parseInt(watch(`itemList.${index}.price`)) *
                      parseInt(watch(`itemList.${index}.quantity`))}
                  </p>
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
          type="button"
          variant="ghost"
          className="col-span-6 text-neutral-7 sm:col-span-12"
          onClick={() =>
            append({ name: "", price: "1", quantity: "1", total: "1" })
          }
        >
          + Add New Item
        </Button>
      </div>
      {actions}
    </form>
  );
}
