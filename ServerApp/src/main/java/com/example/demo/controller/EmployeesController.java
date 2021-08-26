package com.example.demo.controller;
import com.example.demo.model.Employees;
import com.example.demo.repository.EmployeesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class EmployeesController {

    @Autowired
    private EmployeesRepository employeesRepository;

    @GetMapping("/employees/{login}/parol")
    public List<Employees> getLoginPassEmployees(@PathVariable("login") String login,
                                           @RequestParam String parol)
    {
        List<Employees> employees = new ArrayList<>(employeesRepository.findByLogin(login));
        if(employees.get(0).getParol().equals(parol))
        {
            return employees;
        }
        return new ArrayList<>();
    }
    @GetMapping("/employees")
    public List<Employees> getAllEmployees(@RequestParam(required = false) String serch)
    {
        List<Employees> employees = new ArrayList<>();
        if(serch==null) {
            {
                employeesRepository.findAll().forEach(employees::add);
                return employees;
            }
        }
        if(employeesRepository.findByNtabelnyj(serch).isEmpty())
        {
            if (employeesRepository.findByFamiliya(serch).isEmpty())
            {
                if(employeesRepository.findByDolzhnost(serch).isEmpty())
                {employeesRepository.findAll().forEach(employees::add);}
                else{employees.addAll(employeesRepository.findByDolzhnost(serch));}
            }
            else{employees.addAll(employeesRepository.findByFamiliya(serch));}
        }
        else{employees.addAll(employeesRepository.findByNtabelnyj(serch));}
        if(employees.isEmpty())
        {
            employeesRepository.findAll().forEach(employees::add);
        }
        return employees;
    }
}
