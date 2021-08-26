package com.example.demo.controller;
import com.example.demo.model.Monitoring;
import com.example.demo.repository.MonitoringRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class MonitoringController {
    @Autowired
    private MonitoringRepository monitoringRepository;

    @GetMapping("/monitoring")
    public List<Monitoring> getAllMonitoring()
    {
        return (List<Monitoring>) monitoringRepository.findAll();
    }

    @PostMapping("/monitoring")
    public ResponseEntity<Monitoring> createMonitoring(@RequestBody Monitoring monitoring){
        try {
            Monitoring _monitoring = monitoringRepository
                    .save(new Monitoring(monitoring.getNomerZakaza(),monitoring.getEhtap()));
            return new ResponseEntity<>(_monitoring, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
