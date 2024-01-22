import { FilterPopover } from "@/components";
import { InvoiceList } from "@/components";
import { NewInvoice } from "@/components";

export function InvoicesPage() {
  return (
    <div className="font-bold">
      <div className="mb-8 flex items-center gap-4 sm:mb-14 md:gap-10">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-4xl">Invoices</h2>
          <p className="text-sm text-neutral-6">7 invoices</p>
        </div>
        <FilterPopover />
        <NewInvoice />
      </div>
      <InvoiceList />
    </div>
  );
}
