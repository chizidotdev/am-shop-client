type UserRole = "master" | "vendor" | "customer";
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  googleId: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

interface Store {
  id: string;
  name: string;
  description: string;
  image: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

interface Image {
  id: string;
  productId: string;
  url: string;
}
type Money = number;
interface Product {
  id: string;
  storeId: string;
  title: string;
  description: string;
  price: Money;
  outOfStock: boolean;
  images: Image[];
  createdAt: string;
  updatedAt: string;
}

interface ProductDetail extends Product {
  store: Store;
}

interface Cart {
  id: string;
  cartId: string;
  productId: string;
  title: string;
  description: string;
  imageUrl: string;
  price: Money;
  quantity: number;
  outOfStock: boolean;
  createdAt: string;
  updatedAt: string;
}
