import http from "../http-common";

class Find_uslugiDataService {
    getAll() {
        return http.get("/find_uslugi");
    }  
}
  export default new Find_uslugiDataService();