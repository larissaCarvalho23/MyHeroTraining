package com.ifsp.MyHeroTraining.Controllers;

import com.ifsp.MyHeroTraining.ConfigEmail.EmailConfig;
import com.ifsp.MyHeroTraining.Models.CadastroUsuario;
import com.ifsp.MyHeroTraining.Models.ConfirmationToken;
import com.ifsp.MyHeroTraining.Models.EmailUsuario;
import com.ifsp.MyHeroTraining.repository.CadastroUsuarioRepository;
import com.ifsp.MyHeroTraining.repository.ConfirmationTokenRepository;
import com.ifsp.MyHeroTraining.repository.EmailRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/email")
public class EmailEnvioController {
    Logger logger = LoggerFactory.getLogger(LoggingController.class);
    @Autowired
    private EmailRepository emailRepository;
    @Autowired
    private ConfirmationTokenRepository confirmationTokenRepository;
    @Autowired
    private CadastroUsuarioRepository cadastroUsuarioRepository;

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
        try {
        logger.info(emailusuario);
            Optional<CadastroUsuario> user = cadastroUsuarioRepository.findByEmail(emailusuario);
            ConfirmationToken confirmationToken = new ConfirmationToken(user.get());

            confirmationTokenRepository.save(confirmationToken);

            SimpleMailMessage message = new SimpleMailMessage();
            String text = "Olá, bem vindo(a) ao MYHEROTRAINING.COM!\r\n"
                    + "Para confirmar seu cadastro, por favor clique aqui: "
                    + "http://localhost:8080/#/confirm-account?token=" + confirmationToken.getConfirmationToken();
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
