import { useInvoices } from "@/store/invoices";

export function useInvoiceId(id: string) {
  const invoices = useInvoices((state) => state.invoices);

  const invoiceById = invoices.find((invoice) => invoice.id === id);

  return invoiceById;
}
