import { useInvoices } from "@/api/get-invoices";
import { InvoiceMeta } from "./invoice-meta";

export function InvoiceList() {
  const { data: invoices } = useInvoices();
  const isInvoiceLoading = invoices?.length;
  return (
    <div className="flex flex-col gap-4">
      {isInvoiceLoading && <InvoiceMeta invoices={invoices} />}
    </div>
  );
}
