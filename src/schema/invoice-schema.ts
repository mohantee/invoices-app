import { z } from "zod";
export const invoiceSchema = z.object({
  senderStreetAddress: z.string().min(1, { message: "can't be empty" }),
  senderCity: z.string().min(1, { message: "can't be empty" }),
  senderPostCode: z.string().min(1, { message: "can't be empty" }),
  senderCountry: z.string().min(1, { message: "can't be empty" }),
  clientName: z.string().min(1, { message: "can't be empty" }),
  clientStreetAddress: z.string().min(1, { message: "can't be empty" }),
  clientCity: z.string().min(1, { message: "can't be empty" }),
  clientPostCode: z.string().min(1, { message: "can't be empty" }),
  clientCountry: z.string().min(1, { message: "can't be empty" }),
  clientEmail: z.string().min(1, { message: "can't be empty" }),
  invoiceDate: z.coerce.date(),
  paymentTerms: z.string().min(1, { message: "can't be empty" }),
  projectDescription: z.string().min(1, { message: "can't be empty" }),
  itemList: z.array(
    z.object({
      name: z.string().min(1, { message: "can't be empty" }),
      quantity: z.string().min(1, { message: "can't be empty" }),
      price: z.string().min(1, { message: "can't be empty" }),
    }),
  ),
});
