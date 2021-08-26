package com.example.demo.model;
import javax.persistence.*;

@Entity
@Table(name = "Uslugi")
public class Service {
    @Id
    private String kodUslugi;

    @Column(name = "naimenovanie")
    private String naimenovanie;

    @Column(name = "stoimost")
    private String stoimost;

    @Column(name = "srokVypolneniya")
    private String srokVypolneniya;

    @Column(name = "garantiya")
    private String garantiya;

    public Service() {
    }

    public Service(String naimenovanie, String stoimost, String srokVypolneniya, String garantiya)
    {
        this.naimenovanie = naimenovanie;
        this.stoimost = stoimost;
        this.srokVypolneniya = srokVypolneniya;
        this.garantiya = garantiya;
    }



    public String getNaimenovanie() {
        return naimenovanie;
    }

    public void setNaimenovanie(String naimenovanie) {
        this.naimenovanie = naimenovanie;
    }

    public String getStoimost() {
        return stoimost;
    }

    public void setStoimost(String stoimost) {
        this.stoimost = stoimost;
    }

    public String getKodUslugi() {
        return kodUslugi;
    }

    public void setKodUslugi(String kodUslugi) {
        this.kodUslugi = kodUslugi;
    }

    public String getSrokVypolneniya() {
        return srokVypolneniya;
    }

    public void setSrokVypolneniya(String srokVypolneniya) {
        this.srokVypolneniya = srokVypolneniya;
    }

    public String getGarantiya() {
        return garantiya;
    }

    public void setGarantiya(String garantiya) {
        this.garantiya = garantiya;
    }

    @Override
    public String toString() {
        return "Employees [naimenovanie=" + naimenovanie + ", stoimost=" + stoimost +
                ", srokVypolneniya=" + srokVypolneniya + "," +" garantiya=" + garantiya +"]";
    }
}
