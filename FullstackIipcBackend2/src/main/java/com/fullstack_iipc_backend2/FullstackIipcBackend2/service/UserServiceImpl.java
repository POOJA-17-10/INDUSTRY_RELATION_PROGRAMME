package com.fullstack_iipc_backend2.FullstackIipcBackend2.service;

import com.fullstack_iipc_backend2.FullstackIipcBackend2.model.User;
import com.fullstack_iipc_backend2.FullstackIipcBackend2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            throw new IllegalStateException("User with email " + user.getEmail() + " already exists!");
        }
        return userRepository.save(user);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
