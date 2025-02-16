package com.example.academy.controller;

import com.example.academy.model.User;
import com.example.academy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    private final UserService userService;
    private final BCryptPasswordEncoder bCryptEncoder = new BCryptPasswordEncoder(12);

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/register")
    public User register(@RequestBody User user){
        user.setPassword(bCryptEncoder.encode(user.getPassword()));
        user.setRoles("USER");
        return userService.register(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user){
        return userService.verify(user);
    }
}
