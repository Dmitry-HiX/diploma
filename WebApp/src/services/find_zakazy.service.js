import http from "../http-common";

class SearchDataService {
    getAll() {
        return http.get("/search");
    }
    getAll(serch) {
        return http.get(`/search?serch=${serch}`);
    }  
}
  export default new SearchDataService();