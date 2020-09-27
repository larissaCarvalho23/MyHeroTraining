package com.ifsp.MyHeroTraining.Forms;

import com.ifsp.MyHeroTraining.Models.Fase;
import com.ifsp.MyHeroTraining.repository.FaseRepository;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
public class FaseAtualiza {

    public Boolean getFaseConcluida() {
        return faseConcluida;
    }
    public void setFaseConcluida(Boolean faseConcluida) {
        this.faseConcluida = faseConcluida;
    }
    public Boolean faseConcluida;

    public Fase atualizar(@NotNull Integer id, @NotNull FaseRepository faseRepository) {
        Fase fase = faseRepository.getOne(id);
        fase.setFaseConcluida(this.faseConcluida);
        return fase;
    }
}

