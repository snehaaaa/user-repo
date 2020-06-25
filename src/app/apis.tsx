
import ServiceRequest from "./services";
import { ApiPath, METHOD } from "./config/apiPath";
import { ApiConfig } from "./config/apiConfig";

class Apis {
    public *userDetail() {
        const axiosParam = {
            baseURL: ApiConfig.baseUrl,
            method: METHOD.GET,
            url: ApiPath.USERDETAIL
        };
        const postsDetail = yield ServiceRequest.invoke(axiosParam);
        return postsDetail;
    }
    public *userRepo() {
        const axiosParam = {
            baseURL: ApiConfig.baseUrl,
            method: METHOD.GET,
            url: ApiPath.USERREPO
        };
        const postsDetail = yield ServiceRequest.invoke(axiosParam);
        return postsDetail;
    }
}
export default new Apis();
