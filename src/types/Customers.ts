/* eslint-disable @typescript-eslint/no-explicit-any */

export interface CustomerType
 {
  id: number;
  customerId: string;
  fullname: string;
  email: string;
  position: string;
  salary: string;
  image?: any; // optional since not every customer will have it
}
