import { render } from "@testing-library/vue";
import ProductList from "../components/product/ProductList.vue";

describe("ProductList.vue", () => {
  it("renders props array when passed", () => {
    const productList = [
      {
        title: "Product",
      },
    ];
    const { getByText } = render(ProductList, {
      props: { productList },
    });

    expect(getByText(productList[0].title));
  });
});
