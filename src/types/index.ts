export interface IUser {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: 'ADMIN' | 'VENDOR' | 'CUSTOMER';
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  stock: number;
}

export interface IOrder {
  id: string;
  userId: string;
  total: number;
  status: string;
}
