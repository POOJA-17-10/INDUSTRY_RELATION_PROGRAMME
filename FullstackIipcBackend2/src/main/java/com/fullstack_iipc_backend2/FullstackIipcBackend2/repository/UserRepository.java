package com.fullstack_iipc_backend2.FullstackIipcBackend2.repository;

import com.fullstack_iipc_backend2.FullstackIipcBackend2.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
