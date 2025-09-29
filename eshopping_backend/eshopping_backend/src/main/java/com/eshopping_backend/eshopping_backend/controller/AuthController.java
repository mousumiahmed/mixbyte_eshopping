package com.eshopping_backend.eshopping_backend.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eshopping_backend.eshopping_backend.model.User;
import com.eshopping_backend.eshopping_backend.repository.UserRepository;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    @Autowired private UserRepository userRepo;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user){
        userRepo.save(user);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody Map<String,String> body){
        return userRepo.findByEmail(body.get("email")).orElse(null);
    }
}

