package com.example.demo.model;
import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "Naboruslug")
public class Naboruslug {
    @Id
    private int nomerZakaza;

    @Column(name = "kodUslugi")
    private String kodUslugi;

    @Column(name = "dataSozdania")
    private Date dataSozdania;

    public int getNomerZakaza() {
        return nomerZakaza;
    }

    public void setNomerZakaza(int nomerZakaza) {
        this.nomerZakaza = nomerZakaza;
    }

    public String getKodUslugi() {
        return kodUslugi;
    }

    public void setKodUslugi(String kodUslugi) {
        this.kodUslugi = kodUslugi;
    }

    public Date getDataSozdania() {
        return dataSozdania;
    }

    public void setDataSozdania(Date dataSozdania) {
        this.dataSozdania = dataSozdania;
    }

    public Naboruslug(int nomerZakaza, String kodUslugi, Date dataSozdania) {
        this.nomerZakaza = nomerZakaza;
        this.kodUslugi = kodUslugi;
        this.dataSozdania = dataSozdania;
    }
    public Naboruslug() {}

    @Override
    public String toString() {
        return "Naboruslug [nomerZakaza=" + nomerZakaza + ", kodUslugi=" + kodUslugi
                + ", dataSozdania=" + dataSozdania +"]";
    }
}
