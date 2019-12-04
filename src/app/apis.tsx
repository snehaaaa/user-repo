
import ServiceRequest from "./services";
import { ApiPath, METHOD } from "./config/apiPath";
import { ApiConfig } from "./config/apiConfig";

class Apis {
    public *allUsers(args:any) {
        const axiosParam = {
            baseURL: ApiConfig.baseUrl,
            method: METHOD.GET,
            params: {
                ...args
            },

            url: ApiPath.USERS
        };
        const users = yield ServiceRequest.invoke(axiosParam);
        return users;
    }
    public *allUserPost(args:any) {
        const axiosParam = {
            baseURL: ApiConfig.baseUrl,
            method: METHOD.GET,
            params: {
               ...args
            },

            url: ApiPath.POSTS 
        };
        const posts = yield ServiceRequest.invoke(axiosParam);
        return posts;
    }
    public *postDetail(args:any) {
        const axiosParam = {
            baseURL: ApiConfig.baseUrl,
            method: METHOD.GET,
            url: ApiPath.POSTS +"/"+ args
        };
        const postsDetail = yield ServiceRequest.invoke(axiosParam);
        return postsDetail;
    }
    public *allComments(args:any) {
         const axiosParam = {
             baseURL: ApiConfig.baseUrl,
             method: METHOD.GET,
             params: {
                 ...(args.postId && { postId: args.postId })
             },
 
             url: ApiPath.COMMENTS 
         };
         const comments = yield ServiceRequest.invoke(axiosParam);
         return comments;
     }
     public *deletePost(args:any) {
        const axiosParam = {
            baseURL: ApiConfig.baseUrl,
            method: METHOD.DELETE,
            url: ApiPath.POSTS +"/"+ args
        };
        const deletedPost = yield ServiceRequest.invoke(axiosParam);
        return deletedPost;
    }
}
export default new Apis();
