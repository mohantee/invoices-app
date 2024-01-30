import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui";
import { InvoiceFormValues } from "@/types";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { Form } from ".";
import { useParams } from "react-router-dom";
import { useInvoices } from "@/store/invoices";
import { useInvoiceId } from "@/hooks/use-invoice-id";

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
    reset,
  } = useForm<InvoiceFormValues>({
    defaultValues: oldInvoice,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "itemList",
  });

  const onSubmit: SubmitHandler<InvoiceFormValues> = (data) => {
    const newInvoice = {
      ...data,
      id: oldInvoice?.id,
      dueDate: oldInvoice?.dueDate,
      amountDue: oldInvoice?.amountDue,
      status: oldInvoice?.status,
    };
    // @ts-expect-error here
    edit(newInvoice, id);
  };

  const actions = (
    <div className="col-span-2 flex justify-end gap-3 bg-white sm:col-span-3">
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
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="ghost" className="text-neutral-7">
          Edit
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[3] h-full w-full bg-black/15" />
        <Dialog.Content className="fixed left-0 top-[72px] z-10 h-screen w-full overflow-y-auto bg-white p-6 pb-24 sm:w-[38rem] lg:left-14 lg:top-0 lg:px-14 lg:py-8 lg:pl-[72px]">
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
