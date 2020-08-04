package com.ifsp.MyHeroTraining.Models;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Perfil implements GrantedAuthority {
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomePerrfil() {
        return nomePerrfil;
    }

    public void setNomePerrfil(String nomePerrfil) {
        this.nomePerrfil = nomePerrfil;
    }

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nomePerrfil;

    @Override
    public String getAuthority() {
        return nomePerrfil;
    }
}
