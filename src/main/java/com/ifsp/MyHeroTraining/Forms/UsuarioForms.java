package com.ifsp.MyHeroTraining.Forms;

<<<<<<< HEAD
import com.ifsp.MyHeroTraining.Models.Perfil;
import com.ifsp.MyHeroTraining.Models.Usuario;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import java.util.List;
=======
import com.ifsp.MyHeroTraining.Models.Fase;
import com.ifsp.MyHeroTraining.Models.Usuario;
import com.ifsp.MyHeroTraining.repository.FaseRepository;
import com.ifsp.MyHeroTraining.repository.UsuarioRepository;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import javax.validation.constraints.NotNull;
>>>>>>> criacao-fluxo-treinos

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

<<<<<<< HEAD
=======
    private String email;
    private  String senha;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
    private  String token;
>>>>>>> criacao-fluxo-treinos
}
