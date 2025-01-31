package com.fullstack_iipc_backend2.FullstackIipcBackend2.service;

import com.fullstack_iipc_backend2.FullstackIipcBackend2.model.Event;

import java.util.List;

public interface EventService {
    List<Event> getEventsByType(String type);
    Event saveOrUpdateEvent(Event event);
}
