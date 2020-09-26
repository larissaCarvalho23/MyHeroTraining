package com.ifsp.MyHeroTraining.repository;

import com.ifsp.MyHeroTraining.Models.Fase;
import com.ifsp.MyHeroTraining.Models.Treino;
import org.hibernate.Session;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.EntityManager;
import java.util.List;

public interface FaseRepository extends JpaRepository<Fase, Integer> {

  List<Fase> findByTreinoId(Integer id);

    List<Fase> findFaseById(Integer id);



}
