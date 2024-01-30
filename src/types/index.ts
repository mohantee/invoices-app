export type InvoiceMeta = Pick<
  InvoiceResponse,
  "id" | "clientName" | "dueDate" | "amountDue" | "status"
>;

export type InvoiceResponse = {
  id: string;
  dueDate: Date;
  amountDue: string;
  status: string;
  senderStreetAddress: string;
  senderCity: string;
  senderPostCode: string;
  senderCountry: string;
  clientName: string;
  clientStreetAddress: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  clientEmail: string;
  invoiceDate: Date;
  paymentTerms: "Next 1 day" | "Next 7 days" | "Next 14 days" | "Next 30 days";
  projectDescription: string;
  itemList: {
    name: string;
    quantity: string;
    price: string;
    total: string;
  }[];
};

export type InvoiceFormValues = Omit<
  InvoiceResponse,
  "id" | "dueDate" | "amountDue" | "status" | "total"
>;
