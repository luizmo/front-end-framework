
interface User{
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}

interface UserAddress{
  street: string;
  suit: string;
  city: string;
  zipcode: string;
  geo:{
    lat: string;
    lng: string;
  }
}

interface UserCompany{
  name: string;
  catchPhrase: string;
  bs: string;
}

export default User;