package com.example.demo.controller;
import com.example.demo.model.Count_month;
import com.example.demo.repository.Count_monthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class Count_monthController {
    @Autowired
    private Count_monthRepository count_monthRepository;

    @GetMapping("/")
    public List<Count_month> getAllZakazy()
    {
        return (List<Count_month>) count_monthRepository.findAll();
    }
}
