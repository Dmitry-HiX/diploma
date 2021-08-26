import http from "../http-common";

class ServiceDataService {
    getAll() {
      return http.get("/service");
    }
  }
  
  export default new ServiceDataService();