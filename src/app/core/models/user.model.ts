export interface UserCompany {
  name: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  company?: UserCompany;
  birthDate?: string;
  age?: number;
}
