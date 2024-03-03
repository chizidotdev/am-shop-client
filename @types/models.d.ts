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
interface Product {
  id: string;
  storeId: string;
  name: string;
  description: string;
  price: number;
  outOfStock: boolean;
  images: Image[];
  createdAt: string;
  updatedAt: string;
}
