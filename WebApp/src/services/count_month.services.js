import http from "../http-common";

class Count_monthDataService {
    getAll() {
      return http.get("/");
    }
  }
  
  export default new Count_monthDataService();