package com.example.demo.controller;
import com.example.demo.model.Find_employees;
import com.example.demo.repository.Find_employeesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class Find_employeesController {
    @Autowired
    private Find_employeesRepository find_employeesRepository;

    @GetMapping("/find_employees")
    public List<Find_employees> getAllFind_employees()
    {
            return (List<Find_employees>) find_employeesRepository.findAll();
    }
}
