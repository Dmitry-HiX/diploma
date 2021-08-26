import http from "../http-common";

class NaboruslugDataService {
    getAll() {
      return http.get("/naboruslug");
    }
  
    create(naboruslug) {
      return http.post("/naboruslug", naboruslug);
    }
  }
  
  export default new NaboruslugDataService();