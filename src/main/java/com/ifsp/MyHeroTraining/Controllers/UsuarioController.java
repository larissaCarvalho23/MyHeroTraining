package com.ifsp.MyHeroTraining.Controllers;

<<<<<<< HEAD
import com.ifsp.MyHeroTraining.Forms.UsuarioForms;
import com.ifsp.MyHeroTraining.Models.CadastroUsuario;
import com.ifsp.MyHeroTraining.Models.Usuario;
=======
import com.ifsp.MyHeroTraining.Forms.AtualizaUsuarioTreinoForms;
import com.ifsp.MyHeroTraining.Forms.UsuarioForms;
import com.ifsp.MyHeroTraining.Models.CadastroUsuario;
import com.ifsp.MyHeroTraining.Models.Fase;
import com.ifsp.MyHeroTraining.Models.Treino;
import com.ifsp.MyHeroTraining.Models.Usuario;
import com.ifsp.MyHeroTraining.repository.FaseRepository;
import com.ifsp.MyHeroTraining.repository.TreinoRepository;
>>>>>>> criacao-fluxo-treinos
import com.ifsp.MyHeroTraining.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
<<<<<<< HEAD

import javax.validation.Valid;
import java.util.List;

=======
import java.util.List;
>>>>>>> criacao-fluxo-treinos
@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    private UsuarioRepository usuarioRepository;
<<<<<<< HEAD

    @GetMapping
    public List<Usuario> listaUsuario() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        return usuarios;
=======
    @Autowired
    private TreinoRepository treinoRepository;
    @GetMapping
    public  List<Usuario> listaUsuario(@RequestParam Long id) {
      List<Usuario> usuario = usuarioRepository.findById(id);
        return usuario;
>>>>>>> criacao-fluxo-treinos
    }
    @PostMapping
    public void CadastroUsuarioLogin(@RequestBody  UsuarioForms usuarioForms, UriComponentsBuilder uriComponentsBuilder) {
        Usuario usuario = new Usuario();
        usuario.setSenha(new BCryptPasswordEncoder().encode(usuarioForms.getSenha()));
        usuario.setEmailUsuario(usuarioForms.getEmail());
        usuarioRepository.save(usuario);
    }
<<<<<<< HEAD
}
=======
   @PostMapping("/{id}")
    public Treino UpdateUsuario(@PathVariable int id, @RequestBody AtualizaUsuarioTreinoForms atualizaUsuarioTreinoForms) {
        Treino treino = atualizaUsuarioTreinoForms.AtualizaId(id, usuarioRepository,treinoRepository);
        return treino;
    }

}
>>>>>>> criacao-fluxo-treinos
