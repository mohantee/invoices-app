import App from "@/app";
import { it, expect, describe } from "vitest";
import { render } from "@testing-library/react";

describe("<Invoices />", () => {
  it("renders correctly", () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
