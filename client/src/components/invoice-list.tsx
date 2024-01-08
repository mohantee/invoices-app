import { InvoiceMeta } from "./invoice-meta";

type Invoice = {
  id: string;
  due: string;
  receiver: string;
  amount: string;
  status: "Paid" | "Pending" | "Draft";
};

const invoices: Invoice[] = [
  {
    id: "RT3080",
    due: "19 Aug 2021",
    receiver: "Jensen Huang",
    amount: "$1,800.90",
    status: "Paid",
  },
  {
    id: "XM9141",
    due: "20 Sep 2021",
    receiver: "Alex Grim",
    amount: "$556.00",
    status: "Pending",
  },
  {
    id: "RG0314",
    due: "01 Oct 2021",
    receiver: "John Morrison",
    amount: "$14,002.33",
    status: "Paid",
  },
  {
    id: "RT2080",
    due: "12 Oct 2021",
    receiver: "Alysa Werner",
    amount: "$102.04",
    status: "Pending",
  },
  {
    id: "AA1449",
    due: "14 Oct 2021",
    receiver: "Mellisa Clarke",
    amount: "$4,032.33",
    status: "Pending",
  },
  {
    id: "Y9141",
    due: "31 Oct 2021",
    receiver: "Thomas Wayne",
    amount: "$6,155.91",
    status: "Pending",
  },
  {
    id: "FV2353",
    due: "12 Nov 2021",
    receiver: "Anita Wainwright",
    amount: "$3,102.04",
    status: "Draft",
  },
];

export function InvoiceList() {
  return (
    <div className="flex flex-col gap-4">
      <InvoiceMeta invoices={invoices} />
    </div>
  );
}
