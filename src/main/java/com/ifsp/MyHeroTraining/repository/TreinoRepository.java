package com.ifsp.MyHeroTraining.repository;

import com.ifsp.MyHeroTraining.Models.Treino;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TreinoRepository extends JpaRepository<Treino, Integer> {


    Page<Treino> findById(Integer id, Pageable paginacao);

    List<Treino> findByUsuarioId(Integer idUsuario);
}