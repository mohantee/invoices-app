import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui";
import { PlusCircleIcon } from "@/components/icons";
import { InvoiceFormValues } from "@/types";
import { useFieldArray, useForm, SubmitHandler } from "react-hook-form";
import { Form } from ".";
import { useInvoices } from "@/store/invoices";
import { add } from "date-fns";
import { genInvoiceId } from "@/utils/generate-id";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { calculateTotalAmount } from "@/utils/calculate-total-amount";

const schema = z.object({
  senderStreetAddress: z.string().min(1, { message: "can't be empty" }),
  senderCity: z.string().min(1, { message: "can't be empty" }),
  senderPostCode: z.string().min(1, { message: "can't be empty" }),
  senderCountry: z.string().min(1, { message: "can't be empty" }),
  clientName: z.string().min(1, { message: "can't be empty" }),
  clientStreetAddress: z.string().min(1, { message: "can't be empty" }),
  clientCity: z.string().min(1, { message: "can't be empty" }),
  clientPostCode: z.string().min(1, { message: "can't be empty" }),
  clientCountry: z.string().min(1, { message: "can't be empty" }),
  clientEmail: z.string().min(1, { message: "can't be empty" }),
  invoiceDate: z.date(),
  paymentTerms: z.string().min(1, { message: "can't be empty" }),
  projectDescription: z.string().min(1, { message: "can't be empty" }),
  itemList: z.array(
    z.object({
      name: z.string().min(1, { message: "can't be empty" }),
      quantity: z.string().min(1, { message: "can't be empty" }),
      price: z.string().min(1, { message: "can't be empty" }),
    }),
  ),
});

export function NewInvoice() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<InvoiceFormValues>({
    defaultValues: {
      invoiceDate: new Date(),
      paymentTerms: "Next 30 days",
      itemList: [{ name: "", price: "1", quantity: "1" }],
    },
    resolver: zodResolver(schema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "itemList",
  });

  const createInvoice = useInvoices((state) => state.create);

  const actions = (
    <div className="col-span-2 flex justify-between gap-3 bg-white sm:col-span-3">
      <Dialog.Close asChild>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            reset();
          }}
        >
          Discard
        </Button>
      </Dialog.Close>
      <div className="flex justify-between gap-3">
        <Button
          variant="default"
          className="bg-[#373B53] text-neutral-5 hover:bg-neutral-8"
          size="sm"
          type="button"
          onClick={() => handleSubmit((data) => onSubmit(data, true))}
        >
          Save as Draft
        </Button>
        <Button type="submit" variant="default" size="sm">
          Save & Send
        </Button>
      </div>
    </div>
  );

  const onSubmit: SubmitHandler<InvoiceFormValues> = (data, draft) => {
    const daysToAdd = parseInt(data.paymentTerms.substring(5, 7));
    const dueDate = add(data.invoiceDate, { days: daysToAdd });
    const id = genInvoiceId();
    const { itemList, amountDue } = calculateTotalAmount(data.itemList);

    createInvoice({
      ...data,
      dueDate,
      id,
      status: draft ? "Draft" : "Pending",
      amountDue,
      itemList,
    });
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="flex gap-2 py-6 pl-2 pr-4 hover:bg-primary/90 sm:gap-4">
          <PlusCircleIcon />
          <div>
            New <span className="hidden sm:inline">Invoice</span>
          </div>
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 h-full w-full bg-black/15" />
        <Dialog.Content className="fixed left-0 top-[72px] h-screen w-full overflow-y-auto bg-white p-6 pb-24 sm:w-[38rem] lg:left-14 lg:top-0 lg:px-14 lg:py-8 lg:pl-[72px]">
          <Form
            append={append}
            fields={fields}
            remove={remove}
            register={register}
            handleSubmit={handleSubmit}
            actions={actions}
            control={control}
            watch={watch}
            onSubmit={onSubmit}
            errors={errors}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
