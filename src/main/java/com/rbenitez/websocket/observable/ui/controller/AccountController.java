package com.rbenitez.websocket.observable.ui.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

//@Controller
public class AccountController {
    /*
    @GetMapping({"/","/login"})
    public String login(@RequestParam("username") String username,
                        @RequestParam("password") String password,
                        Model model) {
        System.out.println("Llego al Login [String login()]");
        System.out.println("Username: "+ username);
        System.out.println("Password: "+ password);
        if(!username.isEmpty() && !password.isEmpty()){
            if(password.equals("benitez")){
                System.out.println("Redirigi al index.htlm");
                //return "redirect:/templates/index.html";
            }else{
                return "redirect:/templates/login.html";
            }
        }
        return "redirect:/templates/login.html";
        //return "login";
    }

     */
}
