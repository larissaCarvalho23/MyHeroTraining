package com.ifsp.MyHeroTraining.repository;

import com.ifsp.MyHeroTraining.Models.EmailUsuario;
import com.ifsp.MyHeroTraining.Models.Exercicio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailRepository  extends JpaRepository<EmailUsuario, Integer> {
}
