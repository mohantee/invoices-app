import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui";
import { InvoiceFormValues } from "@/types";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { Form } from ".";
import { useParams } from "react-router-dom";
import { useInvoices } from "@/store/invoices";
import { useInvoiceId } from "@/hooks/use-invoice-id";
import { zodResolver } from "@hookform/resolvers/zod";
import { invoiceSchema } from "@/schema/invoice-schema";
import { useState } from "react";
import { calculateTotalAmount } from "@/utils/calculate-total-amount";

type Params = { id: string };

export function EditInvoice() {
  const { id } = useParams<Params>() as Params;
  const edit = useInvoices((state) => state.edit);
  const oldInvoice = useInvoiceId(id);

  const {
    register,
    watch,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<InvoiceFormValues>({
    defaultValues: oldInvoice,
    resolver: zodResolver(invoiceSchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "itemList",
  });

  const [open, setOpen] = useState(false);

  const onSubmit: SubmitHandler<InvoiceFormValues> = (data) => {
    const { itemList, amountDue } = calculateTotalAmount(data.itemList);
    const newInvoice = {
      ...data,
      id: oldInvoice?.id,
      dueDate: oldInvoice?.dueDate,
      status: oldInvoice?.status,
      invoiceDate: oldInvoice?.invoiceDate,
      itemList,
      amountDue,
    };
    // @ts-expect-error here
    edit(newInvoice, id);
    setOpen(false);
  };

  const actions = (
    <div className="col-span-2 flex justify-end gap-3 bg-white sm:col-span-3 dark:bg-neutral-12">
      <Dialog.Close asChild>
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
      </Dialog.Close>
      <Button type="submit" variant="default" size="sm">
        Save Changes
      </Button>
    </div>
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="ghost" className="text-neutral-7">
          Edit
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[3] h-full w-full bg-black/15" />
        <Dialog.Content className="fixed left-0 top-[72px] z-10 h-screen w-full overflow-y-auto bg-white p-6 pb-24 sm:w-[38rem] lg:left-14 lg:top-0 lg:px-14 lg:py-8 lg:pl-[72px] dark:bg-neutral-12">
          <Form
            edit
            watch={watch}
            errors={errors}
            append={append}
            fields={fields}
            remove={remove}
            register={register}
            handleSubmit={handleSubmit}
            actions={actions}
            control={control}
            onSubmit={onSubmit}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
