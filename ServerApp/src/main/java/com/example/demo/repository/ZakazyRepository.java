package com.example.demo.repository;
import com.example.demo.model.Zakazy;
import org.springframework.data.repository.CrudRepository;

public interface ZakazyRepository extends CrudRepository<Zakazy, Long> {
}