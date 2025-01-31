package com.fullstack_iipc_backend2.FullstackIipcBackend2.controller;

import com.fullstack_iipc_backend2.FullstackIipcBackend2.model.User;
import com.fullstack_iipc_backend2.FullstackIipcBackend2.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User newUser = userService.saveUser(user);
            return ResponseEntity.ok(newUser);
        } catch (IllegalStateException e) {
            return ResponseEntity.status(409).body(e.getMessage());  // Return 409 Conflict if user already exists
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        Optional<User> existingUser = userService.findByEmail(user.getEmail());
        if (existingUser.isPresent() && existingUser.get().getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok(existingUser.get());
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}
