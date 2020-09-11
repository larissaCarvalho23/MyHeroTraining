package com.ifsp.MyHeroTraining.Models;
<<<<<<< HEAD

=======
>>>>>>> criacao-fluxo-treinos
import javax.persistence.*;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;
<<<<<<< HEAD

@Entity
public class Treino {
    private static final int serialVersionUID = (int) 1L;

=======
@Entity
public class Treino {
>>>>>>> criacao-fluxo-treinos
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String descricao;
    private Time horas;
    private String intensidade;
    private String nivel;

<<<<<<< HEAD
    public List<Dias> getDias() {
        return dias;
    }

    public void setDias(List<Dias> dias) {
        this.dias = dias;
    }

    @ManyToMany(fetch = FetchType.EAGER)
    private List<Dias> dias = new ArrayList<>();
=======
    @ManyToOne
    private Fase fase;

    public List<Exercicio> getExercicios() {
        return exercicios;
    }
    public void setExercicios(List<Exercicio> exercicios) {
        this.exercicios = exercicios;
    }
    @ManyToMany
    private List<Exercicio> exercicios = new ArrayList<>();
>>>>>>> criacao-fluxo-treinos

    public Treino() {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.intensidade = intensidade;
    this.nivel = nivel;

    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Time getHoras() {
        return horas;
    }

    public void setHoras(Time horas) {
        this.horas = horas;
    }

    public String getIntensidade() {
        return intensidade;
    }

    public void setIntensidade(String intensidade) {
        this.intensidade = intensidade;
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
    }
}
