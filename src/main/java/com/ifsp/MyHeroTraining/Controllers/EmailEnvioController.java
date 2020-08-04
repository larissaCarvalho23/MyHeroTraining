package com.ifsp.MyHeroTraining.Controllers;

import com.ifsp.MyHeroTraining.ConfigEmail.EmailConfig;
import com.ifsp.MyHeroTraining.DTO.CadastroUsuarioDto;
import com.ifsp.MyHeroTraining.DTO.EmailDto;
import com.ifsp.MyHeroTraining.Forms.EmailForms;
import com.ifsp.MyHeroTraining.Models.CadastroUsuario;
import com.ifsp.MyHeroTraining.Models.EmailUsuario;
import com.ifsp.MyHeroTraining.repository.EmailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import javax.swing.text.html.HTML;
import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/email")
public class EmailEnvioController {
    @Autowired
    private EmailRepository emailRepository;
        @GetMapping
        public List<EmailUsuario> listaUsuario(){
        List<EmailUsuario> emailUsuarios = emailRepository.findAll();
        return emailUsuarios;
    }
    @PostMapping
    public ResponseEntity enviaEmail(@RequestBody String emailusuario) {
        JavaMailSender mailSender;
        EmailConfig em = new EmailConfig();
        mailSender = em.mailSender();
       // emailRepository.save(emailUsuario);
        try{
            SimpleMailMessage message = new SimpleMailMessage();
            String text = "Olá, bem vindo(a) ao MYHEROTRAINING.COM!\r\n"
                    + "Acesse nossa página e realize o login para acessar nosso serviços \n" +
                    "Att.\n" +
                    "Equipe MyHeroTraining\n";
            message.setText(text);
            message.setTo(emailusuario);
            message.setFrom("myherotraining@gmail.com");
            message.setSubject("Cadastro MyHeroTraining");
            mailSender.send(message);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
         }
     }
}
