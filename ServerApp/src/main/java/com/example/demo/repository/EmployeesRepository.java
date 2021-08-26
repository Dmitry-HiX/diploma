package com.example.demo.repository;
import java.util.List;
import com.example.demo.model.Employees;
import org.springframework.data.repository.CrudRepository;

public interface EmployeesRepository extends CrudRepository<Employees, Long> {
    List<Employees> findByLogin (String login);
    List<Employees> findByNtabelnyj (String ntabelnyj);
    List<Employees> findByFamiliya (String familiya);
    List<Employees> findByDolzhnost (String dolzhnost);
}