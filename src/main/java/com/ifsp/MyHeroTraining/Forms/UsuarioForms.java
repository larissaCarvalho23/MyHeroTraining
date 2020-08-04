package com.ifsp.MyHeroTraining.Forms;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

public class UsuarioForms {
    public void setEmail(String email) {
        this.email = email;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public UsernamePasswordAuthenticationToken converter(){
        return new UsernamePasswordAuthenticationToken(email,senha);
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    private String email;
    private  String senha;
}
