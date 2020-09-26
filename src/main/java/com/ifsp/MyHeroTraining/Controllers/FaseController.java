package com.ifsp.MyHeroTraining.Controllers;

import com.ifsp.MyHeroTraining.Models.Fase;
import com.ifsp.MyHeroTraining.Forms.FaseAtualiza;
import com.ifsp.MyHeroTraining.repository.FaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
@RestController
@RequestMapping("/fase")
public class FaseController {
    @Autowired
    private FaseRepository faseRepository;
    @GetMapping
            //("/fase")
   public List<Fase> listaFases(@RequestParam Integer id) {
        List<Fase> treinoFase = faseRepository.findByTreinoId(id);
        return treinoFase;
    }
   @GetMapping("/treino")
    public List<Fase> lisIdtreino(@RequestParam Integer id) {
        List<Fase> listTreino = faseRepository.findFaseById(id);
        return listTreino;
    }
    @PutMapping("/{id}")
    @Transactional
    public Fase UpdateFase(@PathVariable Integer id,@RequestBody FaseAtualiza faseAtualiza){
        Fase fase = faseAtualiza.atualizar(id,faseRepository);
       return fase;
    }
}


