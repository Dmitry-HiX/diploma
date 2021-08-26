package com.example.demo.model;
import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "count_month")
public class Count_month {

    @Id
    private Date dataVypolneniya;

    @Column(name = "count")
    private String count;

    public Date getDataVypolneniya() {
        return dataVypolneniya;
    }

    public void setDataVypolneniya(Date dataVypolneniya) {
        this.dataVypolneniya = dataVypolneniya;
    }

    public String getCount() {
        return count;
    }

    public void setCount(String count) {
        this.count = count;
    }
    public Count_month() {

    }
    public Count_month(String count, Date dataVypolneniya) {

    }

}
