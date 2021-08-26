package com.example.demo.model;
import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;


@Entity
@Table(name = "zakazy")

public class Zakazy {
    @Id
    private long nomerZakaza;

    @Column(name = "ocenkaStoimostiZakaza")
    private BigDecimal ocenkaStoimostiZakaza;

    @Column(name = "dataPostupleniya")
    private Date dataPostupleniya;

    @Column(name = "ocenkaSrokaVypolneniya")
    private String ocenkaSrokaVypolneniya;

    @Column(name = "nomerVladelca")
    private BigDecimal nomerVladelca;

    @Column(name = "nomerSotrudnika")
    private String nomerSotrudnika;

    @Column(name = "dataVypolneniya")
    private Date dataVypolneniya;

    @Column(name = "okonchatelnayaStoimost")
    private BigDecimal okonchatelnayaStoimost;

    public Zakazy() {
    }

    public Zakazy(long nomerZakaza, BigDecimal ocenkaStoimostiZakaza, Date dataPostupleniya,
                  String ocenkaSrokaVypolneniya, BigDecimal nomerVladelca,
                  String nomerSotrudnika, Date dataVypolneniya, BigDecimal okonchatelnayaStoimost) {
        this.nomerZakaza = nomerZakaza;
        this.ocenkaStoimostiZakaza = ocenkaStoimostiZakaza;
        this.dataPostupleniya = dataPostupleniya;
        this.ocenkaSrokaVypolneniya = ocenkaSrokaVypolneniya;
        this.nomerVladelca = nomerVladelca;
        this.nomerSotrudnika = nomerSotrudnika;
        this.dataVypolneniya = dataVypolneniya;
        this.okonchatelnayaStoimost = okonchatelnayaStoimost;
    }

    public long getNomerZakaza() {
        return nomerZakaza;
    }

    public void setNomerZakaza(long nomerZakaza) {
        this.nomerZakaza = nomerZakaza;
    }

    public BigDecimal getOcenkaStoimostiZakaza() {
        return ocenkaStoimostiZakaza;
    }

    public void setOcenkaStoimostiZakaza(BigDecimal ocenkaStoimostiZakaza) {
        this.ocenkaStoimostiZakaza = ocenkaStoimostiZakaza;
    }

    public Date getDataPostupleniya() {
        return dataPostupleniya;
    }

    public void setDataPostupleniya(Date dataPostupleniya) {
        this.dataPostupleniya = dataPostupleniya;
    }

    public String getOcenkaSrokaVypolneniya() {
        return ocenkaSrokaVypolneniya;
    }

    public void setOcenkaSrokaVypolneniya(String ocenkaSrokaVypolneniya) {
        this.ocenkaSrokaVypolneniya = ocenkaSrokaVypolneniya;
    }

    public BigDecimal getNomerVladelca() {
        return nomerVladelca;
    }

    public void setNomerVladelca(BigDecimal nomerVladelca) {
        this.nomerVladelca = nomerVladelca;
    }

    public String getNomerSotrudnika() {
        return nomerSotrudnika;
    }

    public void setNomerSotrudnika(String nomerSotrudnika) {
        this.nomerSotrudnika = nomerSotrudnika;
    }

    public Date getDataVypolneniya() {
        return dataVypolneniya;
    }

    public void setDataVypolneniya(Date dataVypolneniya) {
        this.dataVypolneniya = dataVypolneniya;
    }

    public BigDecimal getOkonchatelnayaStoimost() {
        return okonchatelnayaStoimost;
    }

    public void setOkonchatelnayaStoimost(BigDecimal okonchatelnayaStoimost) {
        this.okonchatelnayaStoimost = okonchatelnayaStoimost;
    }

    @Override
    public String toString() {
        return "Zakazy [nomerZakaza=" + nomerZakaza + ", ocenkaStoimostiZakaza=" + ocenkaStoimostiZakaza + ", dataPostupleniya=" + dataPostupleniya +
                ", ocenkaSrokaVypolneniya=" + ocenkaSrokaVypolneniya + ", nomerVladelca=" + nomerVladelca +", nomerSotrudnika=" + nomerSotrudnika +
                ", dataVypolneniya=" + dataVypolneniya +", okonchatelnayaStoimost=" + okonchatelnayaStoimost+"]";
    }
}