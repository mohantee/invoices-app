import { axios } from "@/lib/axios";
import { useQuery } from "react-query";
import { InvoiceMeta } from "@/types";

const getInvoices = (): Promise<InvoiceMeta[]> => {
  return axios.get("/invoices");
};

export function useInvoices() {
  return useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
  });
}
