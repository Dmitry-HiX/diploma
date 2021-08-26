package com.example.demo.model;
import javax.persistence.*;

@Entity
@Table(name = "find_vladelcy")
public class Find_vladelcy {

    @Id
    private String nomerVladelca;

    @Column(name = "fioVladelca")
    private String fioVladelca;

    public Find_vladelcy() {
    }

    public String getNomerVladelca() {
        return nomerVladelca;
    }

    public void setNomerVladelca(String nomerVladelca) {
        this.nomerVladelca = nomerVladelca;
    }

    public String getFioVladelca() {
        return fioVladelca;
    }

    public void setFioVladelca(String fioVladelca) {
        this.fioVladelca = fioVladelca;
    }
}
