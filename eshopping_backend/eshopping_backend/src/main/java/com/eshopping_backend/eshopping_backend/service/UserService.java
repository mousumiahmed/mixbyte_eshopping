package com.eshopping_backend.eshopping_backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eshopping_backend.eshopping_backend.model.User;
import com.eshopping_backend.eshopping_backend.repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    // Register new user
    public User registerUser(User user) {
        return userRepo.save(user);
    }

    // Login check
    public User login(String email, String password) {
        Optional<User> u = userRepo.findByEmail(email);
        if (u.isPresent() && u.get().getPassword().equals(password)) {
            return u.get();
        }
        return null; // or throw custom exception
    }

    // Get profile
    public User getProfile(Long id) {
        return userRepo.findById(id).orElse(null);
    }
}

