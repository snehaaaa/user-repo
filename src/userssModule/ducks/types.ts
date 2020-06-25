import { History } from "history";

export interface UsersFlowReducerInterface {
    usersList:any[];
    repoList:any
}

export interface CompanyListInterface {
    [key: string]: string | number;
}


export interface UsersPropsInterface {
    usersList:any;
    history?: History;
    action:UserResponseActionInterface;
    repoList:any;
}
export interface UserResponseActionInterface {
    getUsers(): void;
    getUserRepo():void
    
}