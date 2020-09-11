package com.ifsp.MyHeroTraining.Models;
import org.hibernate.validator.cfg.context.Cascadable;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Fase {
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getDificuldade() {
        return dificuldade;
    }

    public void setDificuldade(String dificuldade) {
        this.dificuldade = dificuldade;
    }

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String descricao;
    private String dificuldade;

    @ManyToMany
<<<<<<< HEAD
    private List<Treino> treinos;
=======
    private List<Exercicio> exercicios;

    @ManyToOne
    private Treino treino;
>>>>>>> criacao-fluxo-treinos

}
