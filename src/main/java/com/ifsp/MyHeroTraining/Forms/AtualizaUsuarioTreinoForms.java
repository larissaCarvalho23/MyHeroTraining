package com.ifsp.MyHeroTraining.Forms;

import com.ifsp.MyHeroTraining.Models.Treino;
import com.ifsp.MyHeroTraining.Models.Usuario;
import com.ifsp.MyHeroTraining.repository.TreinoRepository;
import com.ifsp.MyHeroTraining.repository.UsuarioRepository;

public class AtualizaUsuarioTreinoForms {


    public int getTreino_id() {
        return treino_id;
    }

    public void setTreino_id(int treino_id) {
        this.treino_id = treino_id;
    }

    public int treino_id;

  /*  public Usuario AtualizaId(Integer id, UsuarioRepository usuarioRepository){
        Usuario usuario = usuarioRepository.getOne(id);
        usuario.setTreinos();
        return treino;
    }*/
}
