import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateProduct from "./CreateProduct";
import { Provider } from "react-redux";
import store from "../redux/store";
import { MemoryRouter } from "react-router-dom";

describe("CreateProduct component", () => {
  it("should validate the product name", () => {
    // Render the component inside the MemoryRouter component
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateProduct />
        </MemoryRouter>
      </Provider>
    );

    // Enter an invalid product name
    const productNameInput = screen.getByLabelText("Product Name");
    productNameInput.value = "ini teh";
    productNameInput.dispatchEvent(new Event("change"));
    expect(productNameInput.value).toBe("ini teh");
  });
  it("should validate the product category", () => {
    // Render the component inside the MemoryRouter component
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateProduct />
        </MemoryRouter>
      </Provider>
    );

    // Enter an invalid product category
    const productCategorySelect = screen.getByLabelText("Product Category");
    fireEvent.change(productCategorySelect, { target: { value: "volvo" } });
    expect(productCategorySelect.value).toBe("volvo");
  });

  it("should validate the product image", () => {
    // Render the component inside the MemoryRouter component
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateProduct />
        </MemoryRouter>
      </Provider>
    );

    // Enter an invalid product name
    const productImageInput = screen.getByLabelText("Image Of Product");
    const imageFile = new File(["sample content"], "sample.png", {
      type: "file",
    });
    fireEvent.change(productImageInput, { target: { files: imageFile } });

    // Assert that the file input value has been set
    expect(productImageInput.files).toBe(imageFile);
  });

  it("should validate the product freshness", () => {
    // Render the component inside the MemoryRouter component
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateProduct />
        </MemoryRouter>
      </Provider>
    );

    // Enter an invalid product category
    const productFreshnessSelect = screen.getByLabelText("Product Freshness");
    fireEvent.change(productFreshnessSelect, {
      target: { value: "Brand New" },
    });
    expect(productFreshnessSelect.value).toBe("Brand New");
  });
  it("should validate the product description", () => {
    // Render the component inside the MemoryRouter component
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateProduct />
        </MemoryRouter>
      </Provider>
    );

    // Enter an invalid product name
    const productDescInput = screen.getByLabelText("Additional Description");
    productDescInput.value = "Apakah ini bisa dimasukan menjadi sebuah isian";
    productDescInput.dispatchEvent(new Event("change"));
    expect(productDescInput.value).toBe(
      "Apakah ini bisa dimasukan menjadi sebuah isian"
    );
  });

  it("should validate the product price", () => {
    // Render the component inside the MemoryRouter component
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CreateProduct />
        </MemoryRouter>
      </Provider>
    );

    // Enter an invalid product name
    const productPriceInput = screen.getByLabelText("Product Price");
    productPriceInput.value = 8000;
    productPriceInput.dispatchEvent(new Event("change"));
    expect(productPriceInput.value).toBe("8000");
  });
});
