import { FilterPopover } from "@/components/";
import { Button } from "@/components/ui/button";

export function InvoicesPage() {
  return (
    <div className="font-bold">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-4xl">Invoices</h2>
          <p className="text-neutral-6 text-sm">7 invoices</p>
        </div>
        <FilterPopover />
        <Button>Hello</Button>
      </div>
    </div>
  );
}
