export type Product = {
  id: string;
  name: string;
  packSize: string;
  price: number;
  image: string;
  shortDescription: string;
  longDescription: string;
  available: boolean;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CheckoutFormData = {
  name: string;
  phone: string;
  area: string;
  address: string;
  notes?: string;
};
