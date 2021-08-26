package com.example.demo.controller;
import com.example.demo.model.Find_uslugi;
import com.example.demo.repository.Find_uslugiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class Find_uslugiController {
    @Autowired
    private Find_uslugiRepository find_uslugiRepository;

    @GetMapping("/find_uslugi")
    public List<Find_uslugi> getAllFind_uslugi()
    {
        return (List<Find_uslugi>) find_uslugiRepository.findAll();
    }
}
