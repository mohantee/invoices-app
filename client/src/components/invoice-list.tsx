import { InvoiceMeta } from "./invoice-meta";
import { useInvoices } from "@/store/invoices";

export function InvoiceList() {
  const invoices = useInvoices((state) => state.invoices);
  const filter = useInvoices((state) => state.filter);

  return (
    <div className="flex flex-col gap-4">
      {invoices.map((invoice) => {
        if (
          (filter.pending && invoice.status === "Pending") ||
          (filter.paid && invoice.status === "Paid") ||
          (filter.draft && invoice.status === "draft")
        )
          return <InvoiceMeta key={invoice.id} invoice={invoice} />;
      })}
    </div>
  );
}
