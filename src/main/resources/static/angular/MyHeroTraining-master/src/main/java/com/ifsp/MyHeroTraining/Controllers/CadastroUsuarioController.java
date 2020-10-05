package com.ifsp.MyHeroTraining.Controllers;

import com.ifsp.MyHeroTraining.repository.CadastroUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class CadastroUsuarioController {
 @Autowired
 CadastroUsuarioRepository cadastroUsuarioRepository;
 @RequestMapping("/cadastro-usuario")
     public void CadastroUsuario (){

 }

}
