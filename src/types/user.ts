interface UserAddress {
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface UserBank {
  cardExpire: string;
  cardNumber: string;
}

export interface UserData {
  id: number | undefined;
  firstName: string;
  lastName: string;
  age: number | undefined;
  email: string;
  phone: string;
  image: string;
  address: UserAddress;
  bank: UserBank;
}

export interface BaseUserData {
  id: number | undefined;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}
