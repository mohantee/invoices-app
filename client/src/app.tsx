import { AppLayout } from "./components/";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { InvoicesPage } from "./pages/invoices";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="app" element={<AppLayout />}>
          <Route path="invoices" element={<InvoicesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
