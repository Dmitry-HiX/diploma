import http from "../http-common";

class Find_employeesDataService {
    getAll() {
        return http.get("/find_employees");
    }  
}
  export default new Find_employeesDataService();