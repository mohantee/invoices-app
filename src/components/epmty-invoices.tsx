import invoicesEmptyIcon from "@/assets/invoices-empty.svg";

export function EmptyInvoices() {
  return (
    <div className="mx-auto mt-28 flex w-56 flex-col place-items-center text-center">
      <img src={invoicesEmptyIcon} alt="" className="mb-16" />
      <div>
        <h3 className="mb-6 text-2xl font-bold">There is nothing here</h3>
        <p className="text-sm font-normal text-neutral-6">
          Create an invoice by clicking the{" "}
          <span className="font-bold">"New Invoice"</span> button and get
          started
        </p>
      </div>
    </div>
  );
}
