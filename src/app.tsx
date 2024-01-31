import { AppLayout } from "./components/";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { InvoicesPage } from "./pages/invoices";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/react-query";
import { InvoiceDetails } from "./pages/invoice-details";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="app" element={<AppLayout />}>
            <Route index element={<InvoicesPage />} />
            <Route path="invoices/:id" element={<InvoiceDetails />} />
            <Route path="*" element={<Navigate to="/app" />} />
          </Route>
          <Route path="*" element={<Navigate to="/app" />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
