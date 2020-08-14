package com.ifsp.MyHeroTraining.Controllers;

import com.ifsp.MyHeroTraining.Models.Treino;
import com.ifsp.MyHeroTraining.repository.TreinoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Pageable;
import java.util.List;

@RestController
@RequestMapping("/treinos")
public class TrienoController {
    @Autowired
    private TreinoRepository treinoRepository;
    @GetMapping
    public Page<Treino> listaTreinos(@RequestParam (required = false) Integer id ,@RequestParam (required = false) int pagina, @RequestParam(required = false) int qnt) {
        Pageable paginacao = PageRequest.of(pagina, qnt);

        if (id == null) {
            Page<Treino> treino = treinoRepository.findAll(paginacao);
            return treino;

        } else {
            Page<Treino> treino = treinoRepository.findById(id,paginacao);
            return treino;
        }
    }
        @PostMapping
        public void cadasTreinos(){

        }

    }

