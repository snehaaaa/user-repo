import { History } from "history";

export interface UserPostDetailReducerInterface {
    userPostsDetail?:UserPostDetailResponseInterface,
    userPostComment:UserPostCommentInterface[],
    deleteId?:number
 }
 
 export interface UserPostDetailResponseInterface {
    body: string;
    id: number;
    title: string;
    userId: number;
 }
 export interface UserPostDetailPropsInterface extends UserPostDetailReducerInterface{
    action:any;
    history: History;
 }
export interface UserPostCommentInterface {
    postId:number;
    id: number;
    name: string;
    email: string;
    body: string;
}
export interface UserPostDetaiActionInterface {
   getUserPostDetail(args:number): void;
   getUserPostComment(args:any):void;
   getUserPostDeleted(args:number):void;
}