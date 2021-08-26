package com.example.demo.controller;
import com.example.demo.model.Zakazannyeuslugi;
import com.example.demo.repository.ZakazannyeuslugiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ZakazannyeuslugiController {
    @Autowired
    private ZakazannyeuslugiRepository zakazannyeuslugiRepository;

    @GetMapping("/zakazannyeuslugi")
    public List<Zakazannyeuslugi> getAllZakazannyeuslugi()
    {
        return (List<Zakazannyeuslugi>) zakazannyeuslugiRepository.findAll();
    }

    @PostMapping("/zakazannyeuslugi")
    public ResponseEntity<Zakazannyeuslugi> createZakazannyeuslugi(@RequestBody Zakazannyeuslugi zakazannyeuslugi){
        try {
            Zakazannyeuslugi _zakazannyeuslugi = zakazannyeuslugiRepository
                    .save(new Zakazannyeuslugi(zakazannyeuslugi.getNomerZakaza(),zakazannyeuslugi.getUstanovlennyeZapchasti(),
                            zakazannyeuslugi.getNtabelnyj(),zakazannyeuslugi.getVidRaboty()));
            return new ResponseEntity<>(_zakazannyeuslugi, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

