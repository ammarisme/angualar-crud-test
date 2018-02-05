export class User {
  _id: string;
  mobileNumber: string;
  createdAt: string;
  updatedAt: string;
  __v?:number;

  constructor(public firstName:string, public lastName:string, public email:string){

  }
}
