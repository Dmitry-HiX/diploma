package com.example.demo.model;
import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "find_uslugi")
public class Find_uslugi {
    @Id
    private String nomerZakaza;

    @Column(name = "dataVypolneniya")
    private Date dataVypolneniya;

    @Column(name = "dataPostupleniya")
    private Date dataPostupleniya;

    @Column(name = "usluga")
    private String usluga;

    @Column(name = "rashod")
    private Long rashod;

    @Column(name = "dohod")
    private Long dohod;

    public Find_uslugi() {
    }

    public String getNomerZakaza() {
        return nomerZakaza;
    }

    public void setNomerZakaza(String nomerZakaza) {
        this.nomerZakaza = nomerZakaza;
    }

    public Date getDataVypolneniya() {
        return dataVypolneniya;
    }

    public void setDataVypolneniya(Date dataVypolneniya) {
        this.dataVypolneniya = dataVypolneniya;
    }

    public Date getDataPostupleniya() {
        return dataPostupleniya;
    }

    public void setDataPostupleniya(Date dataPostupleniya) {
        this.dataPostupleniya = dataPostupleniya;
    }

    public String getUsluga() {
        return usluga;
    }

    public void setUsluga(String usluga) {
        this.usluga = usluga;
    }

    public Long getRashod() {
        return rashod;
    }

    public void setRashod(Long rashod) {
        this.rashod = rashod;
    }

    public Long getDohod() {
        return dohod;
    }

    public void setDohod(Long dohod) {
        this.dohod = dohod;
    }
}
