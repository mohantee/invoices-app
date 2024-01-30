import { Button } from "@/components/ui";
import { useNavigate, useParams } from "react-router-dom";
import backIcon from "@/assets/chevron-back.svg";
import { InvoiceStatus } from "@/components/invoice-meta";
import { EditInvoice } from "@/components";
import { format } from "date-fns";
import { useInvoices } from "@/store/invoices";
import { useInvoiceId } from "@/hooks/use-invoice-id";
import { DeleteInvoice } from "@/components/delete-invoice";

type InvoiceParams = { id: string };

export function InvoiceDetails() {
  const { id } = useParams<keyof InvoiceParams>() as InvoiceParams;
  const navigate = useNavigate();
  const invoice = useInvoiceId(id);
  const updateStatus = useInvoices((state) => state.updateStatus);

  return (
    <>
      <div className="mb-8 flex items-center">
        <img src={backIcon} alt="" />
        <Button
          variant="ghost"
          onClick={() => navigate("/app")}
          className="hover:bg-[#F9FAFE]"
        >
          Go back
        </Button>
      </div>
      {invoice?.id && (
        <>
          {/*Invoice status and controls*/}
          <div className="mb-6 flex w-full items-center justify-between rounded-lg bg-white p-6 sm:p-8">
            <div className="flex w-full items-center justify-between gap-5 sm:justify-start">
              <p className="text-neutral-6">Status</p>
              <InvoiceStatus status={invoice.status} />
            </div>
            <div className="fixed bottom-0 left-0 z-[2] flex w-full justify-between gap-2 bg-white p-6 sm:static sm:p-0">
              <EditInvoice />
              <DeleteInvoice id={id} />
              {invoice.status === "Paid" ? (
                <Button onClick={() => updateStatus(id, "Pending")}>
                  Mark as Pending
                </Button>
              ) : null}
              {invoice.status === "Pending" ? (
                <Button onClick={() => updateStatus(id, "Paid")}>
                  Mark as Paid
                </Button>
              ) : null}
              {invoice.status === "Draft" ? (
                <Button onClick={() => updateStatus(id, "Pending")}>
                  Create Invoice
                </Button>
              ) : null}
            </div>
          </div>

          {/* Invoice Details */}
          <div className="mb-24 grid w-full grid-cols-2 grid-rows-[auto] gap-y-8 rounded-lg bg-white p-6 text-sm text-neutral-7 sm:mb-0 sm:grid-cols-3 sm:grid-rows-[auto]">
            <div>
              <p className="text-base font-bold">
                #<span className="text-neutral-8">{invoice.id}</span>
              </p>
              <p>{invoice.projectDescription}</p>
            </div>
            <div className="row-start-2 sm:col-start-3 sm:row-start-1 sm:text-right">
              <p>{invoice.senderStreetAddress}</p>
              <p>{invoice.senderCity}</p>
              <p>{invoice.senderPostCode}</p>
              <p>{invoice.senderCountry}</p>
            </div>
            <div className="row-start-3 flex flex-col gap-8 sm:row-start-2">
              <div>
                <p className="mb-2">Invoice Date</p>
                <p className="text-base font-bold text-neutral-8">
                  {format(invoice.invoiceDate, "d MMM yyyy")}
                </p>
              </div>
              <div>
                <p className="mb-2">Payment Due</p>
                <p className="text-base font-bold text-neutral-8">
                  {format(invoice.dueDate, "d MMM yyyy")}
                </p>
              </div>
            </div>
            <div className="row-start-3 sm:row-start-2">
              <p className="mb-3">Bill To</p>
              <p className="text-base font-bold text-neutral-8">
                {invoice.clientName}
              </p>
              <p>{invoice.clientStreetAddress}</p>
              <p>{invoice.clientCity}</p>
              <p>{invoice.clientPostCode}</p>
              <p>{invoice.clientCountry}</p>
            </div>
            <div className="col-start-1 row-start-4 sm:col-start-3 sm:row-start-2">
              <p className="mb-2">Send To</p>
              <p className="text-base font-bold text-neutral-8">
                {invoice.clientEmail}
              </p>
            </div>
            <div className="col-span-3 row-start-4 hidden w-full rounded-tl-lg rounded-tr-lg bg-[#F9FAFE] text-base sm:row-start-3 sm:block">
              <table className="w-full border-separate border-spacing-8">
                <thead>
                  <tr>
                    <th className="text-start font-medium">Item Name</th>
                    <th className="text-center font-medium">Qty.</th>
                    <th className="text-right font-medium">Price</th>
                    <th className="text-right font-medium">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.itemList.map((item) => (
                    <tr key={item.name}>
                      <td className="font-bold text-neutral-8">{item.name}</td>
                      <td className="text-center">{item.quantity}</td>
                      <td className="text-right">£{item.price}</td>
                      <td className="text-right">£{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-span-2 row-start-5 flex flex-col gap-6 rounded-tl-lg rounded-tr-lg bg-[#F9FAFE] p-6 text-base sm:hidden">
              {invoice.itemList.map((item) => (
                <div key={item.name} className="flex justify-between gap-2">
                  <div>
                    <p className="font-bold text-neutral-8">{item.name}</p>
                    <p>
                      {item.quantity} x £{item.price}
                    </p>
                  </div>
                  <p className="my-auto font-bold text-neutral-8">
                    £ {item.total}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative bottom-8 col-span-2 row-start-6 flex justify-between rounded-bl-lg rounded-br-lg bg-[#373B53] px-6 py-8 text-white sm:col-span-3 sm:row-start-4">
              <p>Grand Total</p>
              <p className="text-2xl font-bold">£{invoice.amountDue}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
