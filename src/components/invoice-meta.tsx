import { cn } from "@/utils/cn";
import { ArrowRight } from "./icons";
import { InvoiceMeta } from "@/types";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns/format";

type Props = { invoice: InvoiceMeta };

type InvoiceStatusProps = {
  className?: string;
  status: string;
};

//TODO: Use CVA for the following component
export function InvoiceStatus(props: InvoiceStatusProps) {
  const { className, status } = props;
  return (
    <div
      className={cn(
        "relative h-10 w-[6.5rem]",
        status === "Paid" && "text-[#33D69F]",
        status === "Pending" && "text-[#FF8F00] ",
        status === "Draft" && "text-[#373B53] ",
        className,
      )}
    >
      <div
        className={cn(
          "absolute h-full w-full rounded-lg opacity-10",
          status === "Paid" && "bg-[#33D69F] ",
          status === "Pending" && "bg-[#FF8F00] ",
          status === "Draft" && "bg-[#373B53] ",
        )}
      ></div>
      <div
        className={cn(
          "relative top-1 flex items-center text-center",
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
export function InvoiceMeta({ invoice }: Props) {
  const navigate = useNavigate();
  return (
    <div
      key={invoice.id}
      className="grid cursor-pointer grid-cols-2 grid-rows-4 rounded-md bg-white p-6 shadow-3xl transition-all hover:shadow-4xl sm:grid-cols-5 sm:grid-rows-1 sm:items-center sm:justify-items-start sm:gap-x-10 dark:bg-neutral-3 dark:text-white"
      onClick={() => {
        navigate(`invoices/${invoice.id}`);
      }}
    >
      <h3 className="text-md row-start-1 text-neutral-8 sm:col-span-1 dark:text-white">
        <span className="text-neutral-7">#</span>
        {invoice.id}
      </h3>
      <p className="row-start-3 text-sm font-medium text-neutral-6 sm:col-start-2 sm:row-start-1 dark:text-white">
        {format(invoice.dueDate, "d MMM yyyy")}
      </p>
      <p className="row-start-4 sm:col-start-4 sm:row-start-1 sm:justify-self-end">
        £{invoice.amountDue}
      </p>
      <p className="col-start-2 row-start-1 justify-self-end text-sm font-medium text-neutral-6 sm:col-start-3 sm:justify-self-start dark:text-white">
        {invoice.clientName}
      </p>
      <InvoiceStatus
        status={invoice.status}
        className="col-start-2 row-start-3 row-end-5 justify-self-end sm:col-start-5 sm:row-start-1"
      />
      <ArrowRight />
    </div>
  );
}
