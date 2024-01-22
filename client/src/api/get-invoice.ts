import { axios } from "@/lib/axios";
import { useQuery } from "react-query";
import { Invoice } from "@/types";

const getInvoice = (id: string): Promise<Invoice> => {
  return axios.get(`/invoices/${id}`);
};

export function useInvoice(id: string) {
  return useQuery({
    queryKey: ["invoice", id],
    queryFn: () => getInvoice(id),
  });
}
