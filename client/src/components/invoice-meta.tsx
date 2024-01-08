import { cn } from "@/utils/cn";
import { ArrowRight } from "./icons";

type Invoice = {
  id: string;
  due: string;
  receiver: string;
  amount: string;
  status: "Paid" | "Pending" | "Draft";
};

type Props = { invoices: Invoice[] };

type InvoiceStatusProps = {
  className: string;
  status: "Paid" | "Pending" | "Draft";
};

//TODO: Use CVA for the following component
export function InvoiceStatus(props: InvoiceStatusProps) {
  const { className, status } = props;
  return (
    <div
      className={cn(
        "h-10 w-[6.5rem] relative",
        status === "Paid" && "text-[#33D69F]",
        status === "Pending" && "text-[#FF8F00] ",
        status === "Draft" && "text-[#373B53] ",
        className,
      )}
    >
      <div
        className={cn(
          "w-full h-full opacity-10 absolute rounded-lg",
          status === "Paid" && "bg-[#33D69F] ",
          status === "Pending" && "bg-[#FF8F00] ",
          status === "Draft" && "bg-[#373B53] ",
        )}
      ></div>
      <div
        className={cn(
          "flex items-center relative top-1 text-center",
          status === "Paid" && "left-[1.875rem]",
          status === "Pending" && "left-5",
          status === "Draft" && "left-7",
        )}
      >
        <span className="text-2xl">•</span>
        <p className="text-sm">{props.status}</p>
      </div>
    </div>
  );
}

//TODO: Make the card accessible
export function InvoiceMeta(props: Props) {
  const invoiceList = props.invoices.map((invoice) => (
    <div
      key={invoice.id}
      className="shadow-md p-6 grid grid-cols-2 grid-rows-4 md:grid-rows-1 md:grid-cols-5 md:justify-items-start md:items-center md:gap-x-10"
    >
      <h3 className="text-md text-neutral-8 row-start-1 md:col-span-1">
        <span className="text-neutral-7">#</span>
        {invoice.id}
      </h3>
      <p className="text-sm font-normal text-neutral-6 row-start-3 md:row-start-1 md:col-start-2">
        {invoice.due}
      </p>
      <p className="row-start-4 md:row-start-1 md:col-start-4 md:justify-self-end">
        {invoice.amount}
      </p>
      <p className="text-sm text-neutral-6 font-normal col-start-2 justify-self-end md:justify-self-start row-start-1 md:col-start-3">
        {invoice.receiver}
      </p>
      <InvoiceStatus
        status={invoice.status}
        className="col-start-2 row-start-3 row-end-5 justify-self-end md:row-start-1 md:col-start-5 scale-90"
      />
      <ArrowRight />
    </div>
  ));
  return invoiceList;
}
