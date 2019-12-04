import { History } from "history";

export interface UsersFlowReducerInterface {
    usersList:UsersResponseInterface[];
    userId?:number;
}

export interface CompanyListInterface {
    [key: string]: string | number;
}

export interface UsersResponseInterface {
    id:number;
    name:string;
    username:string;
    email:string;
    address:CompanyListInterface;
    phone:string;
    website:string;
    company:CompanyListInterface
}
export interface UsersPropsInterface {
    usersList:UsersResponseInterface[];
    history?: History;
    action:UserResponseActionInterface;
}
export interface UserResponseActionInterface {
    getUsers(): void;
    setUserId(args:number):void
    
}