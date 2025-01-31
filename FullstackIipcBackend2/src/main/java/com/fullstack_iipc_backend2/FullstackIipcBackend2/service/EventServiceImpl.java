package com.fullstack_iipc_backend2.FullstackIipcBackend2.service;

import com.fullstack_iipc_backend2.FullstackIipcBackend2.model.Event;
import com.fullstack_iipc_backend2.FullstackIipcBackend2.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository eventRepository;

    @Override
    public List<Event> getEventsByType(String type) {
        return eventRepository.findByType(type);
    }

    @Override
    public Event saveOrUpdateEvent(Event event) {
        return eventRepository.save(event);
    }

    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }
}
