enum MethodsType {
    GET = "get",
    POST = "post",
    DELETE = "delete",
    OPTIONS = "options"
}
export const METHOD = {
    GET: MethodsType.GET,
    OPTIONS: MethodsType.OPTIONS,
    POST: MethodsType.POST,
    DELETE:MethodsType.DELETE
};
export const ApiPath = {
    USERS: "/users",
    POSTS:"/posts",
    COMMENTS:"/comments"
};
