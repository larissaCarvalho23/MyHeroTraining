package com.ifsp.MyHeroTraining.Controllers;

import com.ifsp.MyHeroTraining.Models.Treino;
import com.ifsp.MyHeroTraining.repository.TreinoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/treinos")
public class TrienoController {
    @Autowired
    private TreinoRepository treinoRepository;
    @GetMapping
    public List<Treino> listaTreinos(){
        List<Treino> treino = treinoRepository.findAll();
        return treino;

        }
        @PostMapping
        public void cadasTreinos(){

        }

    }

