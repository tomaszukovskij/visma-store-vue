import { render, screen, fireEvent } from "@testing-library/vue";
import ProductListItem from "../components/product/ProductListItem.vue";

describe("ProductListItem.vue", () => {
  it("Edit button is visible", () => {
    render(ProductListItem);
    expect(screen.getByRole("edit")).toBeVisible();
  });

  it("Edit button clicked and emmit has been passed", async () => {
    const { emitted } = await render(ProductListItem);
    const button = screen.getByRole("edit");
    fireEvent.click(button);
    expect(emitted("edit")).toHaveProperty("edit", [
      [{ data: {}, modalType: "form" }],
    ]);
  });
});
