import { factory, primaryKey } from "@mswjs/data";

const models = {
  user: {
    id: primaryKey(String),
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  },
  invoice: {
    id: primaryKey(String),
    userId: String,
    senderStreetAddress: String,
    senderCity: String,
    senderPostCode: String,
    senderCountry: String,
    clientName: String,
    clientEmail: String,
    clientStreetAdress: String,
    clientCity: String,
    clientPostCode: String,
    clientCountry: String,
    invoiceDate: String,
    paymentTerms: String,
    projectDescription: String,
    itemList: {
      name: String,
      quantity: String,
      price: String,
    },
  },
};

export const db = factory(models);

export type Model = keyof typeof db;

export const loadDb = () =>
  Object.assign(JSON.parse(window.localStorage.getItem("msw-db") || "{}"));

export const persistDb = (model: Model) => {
  if (import.meta.env.MODE === "test") return;
  const data = loadDb();
  // @ts-expect-error here
  data[model] = db[model].getAll();
  window.localStorage.setItem("msw-db", JSON.stringify(data));
};

export const initializeDb = () => {
  const database = loadDb();
  Object.entries(db).forEach(([key, model]) => {
    const dataEntres = database[key];
    if (dataEntres) {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      dataEntres?.forEach((entry: Record<string, any>) => {
        model.create(entry);
      });
    }
  });
};

export const resetDb = () => {
  window.localStorage.clear();
};

initializeDb();
