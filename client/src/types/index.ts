export type InvoiceMeta = {
  id: string;
  clientName: string;
  dueDate: string;
  amountDue: string;
  status: "Pending";
};

export type Invoice = {
  id: string;
  dueDate: string;
  amountDue: string;
  status: "Pending" | "Draft" | "Paid";
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
  invoiceDate: string;
  paymentTerms: "Next 1 day" | "Next 7 days" | "Next 14 days" | "Next 30 days";
  projectDescription: string;
  itemList: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
};
