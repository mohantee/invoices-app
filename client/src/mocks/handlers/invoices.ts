import { http, HttpResponse } from "msw";
export const invoiceHandlers = [
  http.get("/invoices", () => {
    return HttpResponse.json([
      {
        id: "SM9141",
        clientName: "Alex Grim",
        dueDate: "20 Sept 2021",
        status: "Pending",
        amountDue: "£556",
      },
    ]);
  }),

  http.get("/invoices/:id", () => {
    return HttpResponse.json({
      id: "SM9141",
      dueDate: "20 Sep 2021",
      amountDue: "556.00",
      status: "Pending",
      senderStreetAddress: "19 Union Terrace",
      senderCity: "London",
      senderPostCode: "E13EZ",
      senderCountry: "United Kingdom",
      clientName: "Alex Grim",
      clientStreetAddress: "84 Church Way",
      clientCity: "Bradford",
      clientPostCode: "BD19PB",
      clientCountry: "United Kingdom",
      clientEmail: "alexgrim@mail.com",
      invoiceDate: "21 Aug 2021",
      paymentTerms: "Next 30 days",
      projectDescription: "Graphic Design",
      itemList: [
        {
          name: "Banner Design",
          quantity: 1,
          price: "156.00",
          total: "156.00",
        },
        {
          name: "Email Design",
          quantity: 2,
          price: "200.00",
          total: "400.00",
        },
      ],
    });
  }),
];
