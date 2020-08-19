package com.ifsp.MyHeroTraining.Models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Dias {

    private static final int serialVersionUID = (int) 1L;

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int Id;
    public int getId() {
        return Id;
    }
    @ManyToMany(fetch = FetchType.EAGER)
    public List<Exercicios> exercios =new ArrayList<>();

    public void setId(int id) {
        Id = id;
    }

    public int getDia() {
        return dia;
    }

    public void setDia(int dia) {
        this.dia = dia;
    }

    private int dia;

}
