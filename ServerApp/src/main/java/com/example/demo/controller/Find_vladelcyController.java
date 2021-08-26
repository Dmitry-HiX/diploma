package com.example.demo.controller;
import com.example.demo.model.Find_vladelcy;
import com.example.demo.repository.Find_vladelcyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class Find_vladelcyController {
    @Autowired
    private Find_vladelcyRepository find_vladelcyRepository;

    @GetMapping("/find_vladelcy")
    public List<Find_vladelcy> getAllFind_vladelcy()
    {
        return (List<Find_vladelcy>) find_vladelcyRepository.findAll();
    }

}
