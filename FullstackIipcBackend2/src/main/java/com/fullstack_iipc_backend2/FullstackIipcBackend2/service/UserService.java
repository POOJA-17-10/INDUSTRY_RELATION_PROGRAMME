package com.fullstack_iipc_backend2.FullstackIipcBackend2.service;

import com.fullstack_iipc_backend2.FullstackIipcBackend2.model.User;

import java.util.Optional;

public interface UserService {
    User saveUser(User user);
    Optional<User> findByEmail(String email);
}
