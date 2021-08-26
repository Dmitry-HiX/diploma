package com.example.demo.controller;
import com.example.demo.model.Naboruslug;
import com.example.demo.repository.NaboruslugRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class NaboruslugController {
    @Autowired
    private NaboruslugRepository naboruslugRepository;

    @GetMapping("/naboruslug")
    public List<Naboruslug> getAllNaboruslug()
    {
        return (List<Naboruslug>) naboruslugRepository.findAll();
    }

    @PostMapping("/naboruslug")
    public ResponseEntity<Naboruslug> createNaboruslug(@RequestBody Naboruslug naboruslug) {
        try {
            Naboruslug _naboruslug = naboruslugRepository
                    .save(new Naboruslug(naboruslug.getNomerZakaza(),naboruslug.getKodUslugi(),
                            naboruslug.getDataSozdania()));
            return new ResponseEntity<>(_naboruslug, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
