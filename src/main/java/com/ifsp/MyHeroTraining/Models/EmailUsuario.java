package com.ifsp.MyHeroTraining.Models;
import javax.persistence.*;
@Entity
public class EmailUsuario {
    private String email;
     @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    public EmailUsuario(String email) {
        this.email = email;
    }

    public EmailUsuario() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

       public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

}
