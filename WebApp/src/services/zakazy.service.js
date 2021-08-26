import http from "../http-common";
class ZakazyDataService {
    getAll() {
      return http.get("/order");
    }
  
    create(zakazy) {
      return http.post("/order", zakazy);
    }
  }
  
  export default new ZakazyDataService();