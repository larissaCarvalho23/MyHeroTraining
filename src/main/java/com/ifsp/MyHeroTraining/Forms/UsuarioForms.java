package com.ifsp.MyHeroTraining.Forms;

import com.ifsp.MyHeroTraining.Models.Perfil;
import com.ifsp.MyHeroTraining.Models.Usuario;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import java.util.List;

public class UsuarioForms {
    private String email;
    private String senha;

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public UsernamePasswordAuthenticationToken converter() {
        return new UsernamePasswordAuthenticationToken(email, senha);
    }

}
