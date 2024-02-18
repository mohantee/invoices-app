import { FilterPopover } from "@/components";
import { InvoiceList } from "@/components";
import { NewInvoice } from "@/components";
import { EmptyInvoices } from "@/components";
import { useInvoices } from "@/store/invoices";

export function InvoicesPage() {
  const invoices = useInvoices((state) => state.invoices);
  const isInvoicesEmpty = !!invoices.length;
  return (
    <div className="font-bold dark:text-white">
      <div className="mb-8 flex items-center gap-4 sm:mb-14 md:gap-10">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-4xl">Invoices</h2>
          <p className="text-sm text-neutral-6">{invoices.length} invoices</p>
        </div>
        <FilterPopover />
        <NewInvoice />
      </div>
      {isInvoicesEmpty ? <InvoiceList /> : <EmptyInvoices />}
    </div>
  );
}
