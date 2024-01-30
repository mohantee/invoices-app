import { InvoiceResponse } from "@/types";

type ItemList = InvoiceResponse["itemList"];

export function calculateTotalAmount(itemList: ItemList) {
  let total = 0;

  itemList.map((item) => {
    total += parseInt(item.price) * parseInt(item.quantity);
    item.total = (parseInt(item.price) * parseInt(item.quantity)).toString();
    return item;
  });

  return { amountDue: total.toString(), itemList };
}
