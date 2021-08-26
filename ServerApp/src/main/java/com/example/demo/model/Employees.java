package com.example.demo.model;
import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "employees")
public class Employees {
    @Id
    private String ntabelnyj;

    @Column(name = "Familiya")
    private String familiya;

    @Column(name = "Imya")
    private String imya;

    @Column(name = "Otchestvo")
    private String otchestvo;

    @Column(name = "Telefon")
    private String telefon;

    @Column(name = "Dolzhnost")
    private String dolzhnost;

    @Column(name = "DataPriema")
    private Date dataPriema;

    @Column(name = "Login")
    private String login;

    @Column(name = "Parol")
    private String parol;

    public Employees() {

    }

    public Employees(String familiya, String imya, String otchestvo, String telefon,
                     String dolzhnost, Date dataPriema, String login, String parol) {
        this.familiya = familiya;
        this.imya = imya;
        this.otchestvo = otchestvo;
        this.telefon = telefon;
        this.dolzhnost = dolzhnost;
        this.dataPriema = dataPriema;
        this.login = login;
        this.parol = parol;
    }

    public String getNtabelnyj() {
        return ntabelnyj;
    }

    public void setNtabelnyj(String ntabelnyj) {
        this.ntabelnyj = ntabelnyj;
    }

    public String getFamiliya() {
        return familiya;
    }

    public void setFamiliya(String familiya) {
        this.familiya = familiya;
    }

    public String getImya() {
        return imya;
    }

    public void setImya(String imya) {
        this.imya = imya;
    }

    public String getOtchestvo() {
        return otchestvo;
    }

    public void setOtchestvo(String otchestvo) {
        this.otchestvo = otchestvo;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getDolzhnost() {
        return dolzhnost;
    }

    public void setDolzhnost(String dolzhnost) {
        this.dolzhnost = dolzhnost;
    }

    public Date getDataPriema() {
        return dataPriema;
    }

    public void setDataPriema(Date data_priema) {
        this.dataPriema = dataPriema;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getParol() {
        return parol;
    }

    public void setParol(String parol) {
        this.parol = parol;
    }

    @Override
    public String toString() {
        return "Employees [familiya=" + familiya + ", imya=" + imya + ", otchestvo=" + otchestvo + "," +
                " ntabelnyj=" + ntabelnyj + ", telefon=" + telefon + ", dolzhnost=" + dolzhnost +
                ", dataPriema=" + dataPriema + ", login=" + login + ", parol=" + parol +"]";
    }
}
