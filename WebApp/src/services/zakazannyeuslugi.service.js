import http from "../http-common";

class ZakazannyeuslugiDataService {
    getAll() {
      return http.get("/zakazannyeuslugi");
    }
  
    create(zakazannyeuslugi) {
      return http.post("/zakazannyeuslugi", zakazannyeuslugi);
    }
  }
  
  export default new ZakazannyeuslugiDataService();