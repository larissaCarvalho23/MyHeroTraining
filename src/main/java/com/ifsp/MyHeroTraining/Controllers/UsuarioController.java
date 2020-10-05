package com.ifsp.MyHeroTraining.Controllers;

import com.ifsp.MyHeroTraining.Forms.UsuarioForms;
import com.ifsp.MyHeroTraining.Models.Usuario;
import com.ifsp.MyHeroTraining.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping
    public List<Usuario> listaUsuario() {
        return usuarioRepository.findAll();
    }
    @PostMapping
    public void CadastroUsuarioLogin(@RequestBody  UsuarioForms usuarioForms, UriComponentsBuilder uriComponentsBuilder) {
        Usuario usuario = new Usuario();
        usuario.setSenha(passwordEncoder.encode(usuarioForms.getSenha()));
        usuario.setEmail(usuarioForms.getEmail());
        usuarioRepository.save(usuario);
    }
}
