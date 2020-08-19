package com.ifsp.MyHeroTraining.Controllers;

import com.ifsp.MyHeroTraining.Forms.UsuarioForms;
import com.ifsp.MyHeroTraining.Models.CadastroUsuario;
import com.ifsp.MyHeroTraining.Models.Usuario;
import com.ifsp.MyHeroTraining.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    public List<Usuario> listaUsuario() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        return usuarios;
    }
    @PostMapping
    public void CadastroUsuarioLogin(@RequestBody  UsuarioForms usuarioForms, UriComponentsBuilder uriComponentsBuilder) {
        Usuario usuario = new Usuario();
        usuario.setSenha(new BCryptPasswordEncoder().encode(usuarioForms.getSenha()));
        usuario.setEmail(usuarioForms.getEmail());
        usuarioRepository.save(usuario);
    }
}
