import http from "../http-common";

class Find_vladelcyDataService {
    getAll() {
        return http.get("/find_vladelcy");
    }  
}
  export default new Find_vladelcyDataService();