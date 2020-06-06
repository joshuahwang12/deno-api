import { Product } from "../types.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let products: Product[] = [
  {
    id: "1",
    name: "Product Uno",
    description: "This is product uno",
    price: 29.99,
  },
  {
    id: "2",
    name: "Product Dos",
    description: "This is product dos",
    price: 39.99,
  },
  {
    id: "3",
    name: "Product Tres",
    description: "This is product tres",
    price: 19.99,
  },
  {
    id: "4",
    name: "Product Quatro",
    description: "This is product quatro",
    price: 59.99,
  },
];

// @desc GET all products
// @route GET /api/v1/products
const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  };
};

// @desc GET single product
// @route GET /api/v1/products/:id
const getProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);

  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      data: product,
    };
  } else {
    response.status = 404,
      response.body = {
        success: false,
        msg: `No Product Found.`,
      };
  }
};

// @desc GET all products
// @route GET /api/v1/products
const addProduct = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No Data",
    };
  } else {
    const product: Product = body.value;
    product.id = v4.generate();
    products.push(product);
    response.status = 201;
    response.body = {
      success: true,
      data: product,
    };
  }
};

// @desc Update all products
// @route PUT /api/v1/products
const updateProduct = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: "update",
  };
};

// @desc GET all products
// @route GET /api/v1/products
const deleteProduct = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: "delete",
  };
};
export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };
