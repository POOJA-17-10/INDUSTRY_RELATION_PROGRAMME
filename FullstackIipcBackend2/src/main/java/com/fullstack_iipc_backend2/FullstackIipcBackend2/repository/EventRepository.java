package com.fullstack_iipc_backend2.FullstackIipcBackend2.repository;

import com.fullstack_iipc_backend2.FullstackIipcBackend2.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findByType(String type);
}
