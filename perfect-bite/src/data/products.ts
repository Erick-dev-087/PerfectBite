import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "classic-sausage",
    name: "Classic Sausage",
    packSize: "800g",
    price: 1000,
    image: "/media/products/classic-sausage.jpg",
    shortDescription: "The one that started it all.",
    longDescription:
      "A timeless, perfectly seasoned favourite. Our Classic Sausage is where the Perfect Bite journey begins — simple, satisfying, and crafted to bring out the best in every bite.",
    available: true,
  },
  {
    id: "chilli-honey-heat",
    name: "Chilli Honey Heat",
    packSize: "800g",
    price: 1000,
    image: "/media/products/chilli-honey-heat.jpg",
    shortDescription: "Sweet heat with a kick.",
    longDescription:
      "Honey meets chilli for a bold, unforgettable bite. A perfect balance of sweet and spicy that keeps you coming back for more — this is the flavour adventure you've been waiting for.",
    available: true,
  },
  {
    id: "cheese-sausage",
    name: "Cheese Sausage",
    packSize: "800g",
    price: 1100,
    image: "/media/products/cheese-sausage.jpg",
    shortDescription: "Melty, cheesy goodness in every bite.",
    longDescription:
      "Packed with rich, melting cheese that oozes with every bite. A crowd favourite that brings together the best of meat and cheese in one irresistible package.",
    available: true,
  },
];

export const DELIVERY_FEE = 200;
export const DELIVERY_AREA = "within Nairobi";
export const WHATSAPP_NUMBER = "254113141243";
export const BRAND_NAME = "Perfect Bite";
