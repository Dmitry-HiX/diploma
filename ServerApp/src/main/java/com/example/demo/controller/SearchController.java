package com.example.demo.controller;
import com.example.demo.model.Search;
import com.example.demo.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class SearchController {
    @Autowired
    private SearchRepository searchRepository;

    @GetMapping("/search")
    public List<Search> getAllFind_zakazy(@RequestParam(required = false) String serch)
    {
        List<Search> search = new ArrayList<>();
        if (serch==null){
            searchRepository.findAll().forEach(search::add);
            return search;
        }
        if(searchRepository.findByNomerZakaza(serch).isEmpty())
        {if(searchRepository.findByFioVladelcy(serch).isEmpty())
            {if(searchRepository.findByFioEmployees(serch).isEmpty())
                {if(searchRepository.findByVidRaboty(serch).isEmpty())
                    {if(searchRepository.findByEhtap(serch).isEmpty())
                        {searchRepository.findAll().forEach(search::add);}
                    else{search.addAll(searchRepository.findByEhtap(serch));}
                    }
                else{search.addAll(searchRepository.findByVidRaboty(serch));}
                }
            else{search.addAll(searchRepository.findByFioEmployees(serch));}
            }
        else{search.addAll(searchRepository.findByFioVladelcy(serch));}
        }
        else{search.addAll(searchRepository.findByNomerZakaza(serch));}
        if(search.isEmpty())
        {
            searchRepository.findAll().forEach(search::add);
        }
        return search;
    }

}
