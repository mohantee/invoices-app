import { FilterPopover } from "@/components";
import { InvoiceList } from "@/components";
import { Button } from "@/components/ui";
import { PlusCircleIcon } from "@/components/ui";

export function InvoicesPage() {
  return (
    <div className="font-bold">
      <div className="flex items-center gap-4 md:gap-10 mb-8 sm:mb-14">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-4xl">Invoices</h2>
          <p className="text-neutral-6 text-sm">7 invoices</p>
        </div>
        <FilterPopover />
        <Button className="flex gap-2 sm:gap-4 pl-2 py-6 pr-4">
          <PlusCircleIcon />
          <div>
            New <span className="hidden sm:inline">Invoice</span>
          </div>
        </Button>
      </div>
      <InvoiceList />
    </div>
  );
}
