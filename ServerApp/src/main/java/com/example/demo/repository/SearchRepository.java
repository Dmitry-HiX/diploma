package com.example.demo.repository;
import com.example.demo.model.Search;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface SearchRepository extends CrudRepository<Search, Long>{
    List<Search> findByNomerZakaza (String nomerZakaza);
    List<Search> findByFioEmployees (String fioEmployees);
    List<Search> findByFioVladelcy (String fioVladelcy);
    List<Search> findByVidRaboty (String vidRaboty);
    List<Search> findByEhtap (String ehtap);
}