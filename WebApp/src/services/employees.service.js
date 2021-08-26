import http from "../http-common";

class EmployeesDataService {
  getAll() {
    return http.get("/employees");
  }
  findByLogin(login, parol) {
    return http.get(`/employees/${login}/parol?parol=${parol}`);
  }
  getAll(serch) {
    return http.get(`/employees?serch=${serch}`);
  }
}
export default new EmployeesDataService();