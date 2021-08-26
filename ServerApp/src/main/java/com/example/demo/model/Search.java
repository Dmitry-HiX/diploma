package com.example.demo.model;
import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "find_zakazy")
public class Search {
    @Id
    private String nomerZakaza;

    @Column(name = "fioEmployees")
    private String fioEmployees;

    @Column(name = "fioVladelcy")
    private String fioVladelcy;

    @Column(name = "dataVypolneniya")
    private Date dataVypolneniya;

    @Column(name = "dataPostupleniya")
    private Date dataPostupleniya;

    @Column(name = "ehtap")
    private String ehtap;

    @Column(name = "dohod")
    private int dohod;

    @Column(name = "rashod")
    private int rashod;

    @Column(name = "vidRaboty")
    private String vidRaboty;

    @Column(name = "srok")
    private String srok;

    public Search() {
    }

    public String getNomerZakaza() {
        return nomerZakaza;
    }

    public void setNomerZakaza(String nomerZakaza) {
        this.nomerZakaza = nomerZakaza;
    }

    public String getFioEmployees() {
        return fioEmployees;
    }

    public void setFioEmployees(String fioEmployees) {
        this.fioEmployees = fioEmployees;
    }

    public String getFioVladelcy() {
        return fioVladelcy;
    }

    public void setFioVladelcy(String fioVladelcy) {
        this.fioVladelcy = fioVladelcy;
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

    public String getEhtap() {
        return ehtap;
    }

    public void setEhtap(String ehtap) {
        this.ehtap = ehtap;
    }

    public int getDohod() {
        return dohod;
    }

    public void setDohod(int dohod) {
        this.dohod = dohod;
    }

    public int getRashod() {
        return rashod;
    }

    public void setRashod(int rashod) {
        this.rashod = rashod;
    }

    public String getVidRaboty() {
        return vidRaboty;
    }

    public void setVidRaboty(String vidRaboty) {
        this.vidRaboty = vidRaboty;
    }

    public String getSrok() {
        return srok;
    }

    public void setSrok(String srok) {
        this.srok = srok;
    }
}
