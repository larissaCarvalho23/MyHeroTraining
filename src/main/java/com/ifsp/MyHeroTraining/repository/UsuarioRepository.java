package com.ifsp.MyHeroTraining.repository;

import com.ifsp.MyHeroTraining.Models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {
   Usuario findByEmail (String email);
   Optional<Usuario> findByemail (String email);
}
