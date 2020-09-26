package com.ifsp.MyHeroTraining.Models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.validator.cfg.context.Cascadable;
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
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String descricao;
    private String dificuldade;

    public Boolean getFaseConcluida() {
        return faseConcluida;
    }
    public void setFaseConcluida(Boolean faseConcluida) {
        this.faseConcluida = faseConcluida;
    }
    private Boolean faseConcluida;

    @OneToMany
    private List<Exercicio> exercicios;

   public Treino getTreino() {
        return treino;
    }
    public void setTreino(Treino treino) {
        this.treino = treino;
    }
    @ManyToOne
    private Treino treino;
}
