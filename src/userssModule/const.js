import { uuidv4 } from "./ducks/utils";
export const BillingAddress = {
  first_name: "sneha",
  last_name: "kumari",
  address1: "Forum mall",
  address2: "Kormangala",
  city: "Bengaluru",
  state: "Karnataka",
  zipcode: "805110",
  country: "India",
  order_date: "2019-10-30"
};

export const ShippingAddress = {
  first_name: "Abhishek",
  last_name: "Kumar",
  address1: "Andheri",
  address2: "Thane",
  city: "Mumbai",
  state: "Maharashtra",
  zipcode: "560087",
  country: "India",
  order_date: "2019-10-30"
};

export const productDetails = [
  {
    id: uuidv4(),
    product_name: "StockHolm Dining Table",
    Qty: 8,
    unit_price: 529,
    totalPrice: 4232,
    message: "Kindly Proceed"
  },
  {
    id: uuidv4(),
    product_name: "Oulu Dining Chair Tangering (Set of 4 Units)",
    Qty: 2,
    unit_price: 105,
    totalPrice: 210,
    message: ""
  },
  {
    id: uuidv4(),
    product_name: "Oulu Dining Chair Graphite (Set of 4)",
    Qty: 12,
    unit_price: 105,
    totalPrice: 1260,
    message: ""
  }
];
