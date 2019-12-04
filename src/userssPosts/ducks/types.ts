import { History } from "history";

export interface UsersPostReducerInterface {
    userPosts:UserPostResponseInterface[]
}
export interface UserPostResponseInterface {
    userId: number;
    id: number;
    title:string;
    body:string;
}
export interface UsersPostPropsInterface {
    userPosts:UserPostResponseInterface[];
    userId?:number;
    deleteId?:number
    action:UserPostResponseActionInterface;
    history:History
}
export interface GetUserPostInterface {
    userId:number;
    skip:number;
    limit:number;
}
export interface UserPostResponseActionInterface {
    getUserPost(args:GetUserPostInterface): void;
    removePost(args:number):void;
}