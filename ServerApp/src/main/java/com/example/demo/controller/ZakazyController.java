package com.example.demo.controller;
import com.example.demo.model.Zakazy;
import com.example.demo.repository.ZakazyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class ZakazyController {

    @Autowired
    private ZakazyRepository zakazyRepository;

    @GetMapping("/order")
    public List<Zakazy> getAllZakazy()
    {
        return (List<Zakazy>) zakazyRepository.findAll();
    }

    @PostMapping("/order")
    public ResponseEntity<Zakazy> createZakazy(@RequestBody Zakazy zakazy) {
        try {
            Zakazy _zakazy = zakazyRepository
                    .save(new Zakazy(zakazy.getNomerZakaza(),zakazy.getOcenkaStoimostiZakaza(),
                            zakazy.getDataPostupleniya(), zakazy.getOcenkaSrokaVypolneniya(),
                            zakazy.getNomerVladelca(), zakazy.getNomerSotrudnika(),
                            zakazy.getDataVypolneniya(), zakazy.getOkonchatelnayaStoimost()));
            return new ResponseEntity<>(_zakazy, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}