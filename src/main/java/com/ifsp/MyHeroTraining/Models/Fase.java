package com.ifsp.MyHeroTraining.Models;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "fase")
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

    public List<Treino> getTreinos() {
        return treinos;
    }

    public void setTreinos(List<Treino> treinos) {
        this.treinos = treinos;
    }

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String descricao;
    private String dificuldade;

    @OneToMany
    private List<Treino> treinos = new ArrayList<>();

}
