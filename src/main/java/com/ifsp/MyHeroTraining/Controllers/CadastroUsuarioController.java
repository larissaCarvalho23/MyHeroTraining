package com.ifsp.MyHeroTraining.Controllers;

import com.ifsp.MyHeroTraining.DTO.CadastroUsuarioDto;
import com.ifsp.MyHeroTraining.Forms.CadastroUsuarioForms;
import com.ifsp.MyHeroTraining.Models.CadastroUsuario;
import com.ifsp.MyHeroTraining.repository.CadastroUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cadastro-usuario")
public class CadastroUsuarioController {
    @Autowired
    private CadastroUsuarioRepository cadastroUsuarioRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping
  /*  public List<CadastroUsuario> listaUsuario(@RequestParam String email) {
        List<CadastroUsuario> cadastroUsuarios = cadastraUsuarioRepository.findByemail(email);
        return cadastroUsuarios;
<<<<<<< HEAD
=======

    }*/
        public List<CadastroUsuario> listaUsuario() {
        List<CadastroUsuario> cadastroUsuarios = cadastroUsuarioRepository.findAll();
        return cadastroUsuarios;

    }
    @PostMapping
    public ResponseEntity<CadastroUsuarioDto> CadastroUsuario(@RequestBody @Valid CadastroUsuarioForms cadastroUsuarioForms, UriComponentsBuilder uriComponentsBuilder) {

        CadastroUsuario cadastroUsuario = cadastroUsuarioForms.converter();
        //valida se o email já foi cadastrado
        Optional<CadastroUsuario> cadastroUsuario1 = cadastroUsuarioRepository.findByEmail(cadastroUsuarioForms.getEmail());
        if (cadastroUsuario1.isPresent()) {
            //caso já exista o email cadastrado é retornado a bad request para o cliente
            return ResponseEntity.badRequest().build();
        }

        cadastroUsuario.setEnable(false);
        cadastroUsuarioRepository.save(cadastroUsuario);
        URI uri = uriComponentsBuilder.path("/cadastro-usuario/{id}").buildAndExpand(cadastroUsuario.getId()).toUri();
        return ResponseEntity.created(uri).body(new CadastroUsuarioDto(cadastroUsuario));

    }
}
