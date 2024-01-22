import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui";
import { PlusCircleIcon } from "@/components/icons";
import { Invoice } from "@/types";
import { useFieldArray, useForm } from "react-hook-form";
import { Form } from ".";

export function NewInvoice() {
  const { register, control, handleSubmit } = useForm<Invoice>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "itemList",
  });

  const actions = (
    <div className="col-span-2 flex justify-between gap-3 bg-white sm:col-span-3">
      <Dialog.Close asChild>
        <Button variant="ghost" size="sm">
          Discard
        </Button>
      </Dialog.Close>
      <div className="flex justify-between gap-3">
        <Button
          variant="default"
          className="bg-[#373B53] text-neutral-5 hover:bg-neutral-8"
          size="sm"
        >
          Save as Draft
        </Button>
        <Button type="submit" variant="default" size="sm">
          Save & Send
        </Button>
      </div>
    </div>
  );

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
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
