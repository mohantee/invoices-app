import { create } from "zustand";
import { InvoiceResponse } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";

interface InvoiceState {
  invoices: InvoiceResponse[];
  filter: {
    pending: boolean;
    paid: boolean;
    draft: boolean;
  };
  toggleFilter: (filter: string) => void;
  create: (payload: InvoiceResponse) => void;
  edit: (payload: InvoiceResponse, id: string) => void;
  delete: (id: string) => void;
  updateStatus: (id: string, status: string) => void;
}

export const useInvoices = create<InvoiceState>()(
  persist(
    (set) => ({
      invoices: [],
      filter: {
        pending: true,
        paid: true,
        draft: true,
      },
      toggleFilter: (filter) =>
        set((state) => ({
          ...state,
          filter: { ...state.filter, [filter]: !state.filter[filter] },
        })),
      create: (payload) =>
        set((state) => {
          const newInvoices = [...state.invoices];
          newInvoices.push(payload);
          return { ...state, invoices: newInvoices };
        }),
      edit: (payload, id) =>
        set((state) => {
          const newInvoices = [...state.invoices];
          const indexOfInvoice = newInvoices.findIndex(
            (invoice) => invoice.id === id,
          );
          newInvoices.splice(indexOfInvoice, 1);
          newInvoices.push(payload);

          return { ...state, invoices: newInvoices };
        }),
      delete: (id) =>
        set((state) => {
          const newInvoices = [...state.invoices];
          const indexOfInvoice = newInvoices.findIndex(
            (invoice) => invoice.id === id,
          );
          newInvoices.splice(indexOfInvoice, 1);
          return { ...state, invoices: newInvoices };
        }),
      updateStatus: (id, status) =>
        set((state) => {
          const oldInvoices = [...state.invoices];

          const newInvoices = oldInvoices.map((invoice) => {
            if (invoice.id === id) {
              return { ...invoice, status };
            } else return invoice;
          });

          return { ...state, invoices: newInvoices };
        }),
    }),
    {
      name: "invoice-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
