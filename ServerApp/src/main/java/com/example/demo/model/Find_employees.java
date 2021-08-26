package com.example.demo.model;
import javax.persistence.*;

@Entity
@Table(name = "find_employees")
public class Find_employees {
    @Id
    private String ntabelnyj;

    @Column(name = "fioEmployees")
    private String fioEmployees;

    public Find_employees() {
    }

    public String getNtabelnyj() {
        return ntabelnyj;
    }

    public void setNtabelnyj(String ntabelnyj) {
        this.ntabelnyj = ntabelnyj;
    }

    public String getFioEmployees() {
        return fioEmployees;
    }

    public void setFioEmployees(String fioEmployees) {
        this.fioEmployees = fioEmployees;
    }
}
