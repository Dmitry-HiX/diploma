import http from "../http-common";

class MonitoringDataService {
    getAll() {
      return http.get("/monitoring");
    }
  
    create(monitoring) {
      return http.post("/monitoring", monitoring);
    }
  }
  
  export default new MonitoringDataService();