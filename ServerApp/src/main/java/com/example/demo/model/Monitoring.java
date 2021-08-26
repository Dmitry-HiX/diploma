package com.example.demo.model;
import javax.persistence.*;

@Entity
@Table(name = "Monitoring")
public class Monitoring {
    @Id
    private int nomerZakaza;

    @Column(name = "ehtap")
    private String ehtap;

    public int getNomerZakaza() {
        return nomerZakaza;
    }

    public void setNomerZakaza(int nomerZakaza) {
        this.nomerZakaza = nomerZakaza;
    }

    public String getEhtap() {
        return ehtap;
    }

    public void setEhtap(String ehtap) {
        this.ehtap = ehtap;
    }

    public Monitoring(int nomerZakaza, String ehtap) {
        this.nomerZakaza = nomerZakaza;
        this.ehtap = ehtap;
    }
    public Monitoring() {}

    @Override
    public String toString() {
        return "Monitoring [nomerZakaza=" + nomerZakaza + ", ehtap=" + ehtap+"]";
    }
}
