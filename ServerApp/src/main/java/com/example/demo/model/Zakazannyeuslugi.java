package com.example.demo.model;
import javax.persistence.*;

@Entity
@Table(name = "zakazannyeuslugi")
public class Zakazannyeuslugi {
    @Id
    private int nomerZakaza;

    @Column(name = "ustanovlennyeZapchasti")
    private String ustanovlennyeZapchasti;

    @Column(name = "ntabelnyj")
    private String ntabelnyj;

    @Column(name = "vidRaboty")
    private String vidRaboty;

    public Zakazannyeuslugi() {
    }

    public Zakazannyeuslugi(int nomerZakaza, String ustanovlennyeZapchasti,
                            String ntabelnyj, String vidRaboty) {
        this.nomerZakaza = nomerZakaza;
        this.ustanovlennyeZapchasti = ustanovlennyeZapchasti;
        this.ntabelnyj = ntabelnyj;
        this.vidRaboty = vidRaboty;
    }

    public int getNomerZakaza() {
        return nomerZakaza;
    }

    public void setNomerZakaza(int nomerZakaza) {
        this.nomerZakaza = nomerZakaza;
    }

    public String getUstanovlennyeZapchasti() {
        return ustanovlennyeZapchasti;
    }

    public void setUstanovlennyeZapchasti(String ustanovlennyeZapchasti) {
        this.ustanovlennyeZapchasti = ustanovlennyeZapchasti;
    }

    public String getNtabelnyj() {
        return ntabelnyj;
    }

    public void setNtabelnyj(String ntabelnyj) {
        this.ntabelnyj = ntabelnyj;
    }

    public String getVidRaboty() {
        return vidRaboty;
    }

    public void setVidRaboty(String vidRaboty) {
        this.vidRaboty = vidRaboty;
    }
    @Override
    public String toString() {
        return "Employees [nomerZakaza=" + nomerZakaza + ", ustanovlennyeZapchasti=" + ustanovlennyeZapchasti
                + ", ntabelnyj=" + ntabelnyj + "," +" vidRaboty=" + vidRaboty  +"]";
    }
}
