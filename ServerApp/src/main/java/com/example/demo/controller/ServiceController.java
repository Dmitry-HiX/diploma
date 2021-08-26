package com.example.demo.controller;
import com.example.demo.model.Service;
import com.example.demo.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class ServiceController {
    @Autowired
    private ServiceRepository serviceRepository;

    @GetMapping("/service")
    public List<Service> getAllZakazy()
    {
        return (List<Service>) serviceRepository.findAll();
    }
}
