package com.fullstack_iipc_backend2.FullstackIipcBackend2.controller;

import com.fullstack_iipc_backend2.FullstackIipcBackend2.model.Event;
import com.fullstack_iipc_backend2.FullstackIipcBackend2.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @PostMapping
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        return ResponseEntity.ok(eventService.saveOrUpdateEvent(event));
    }

    @GetMapping("/{type}")
    public ResponseEntity<List<Event>> getEventsByType(@PathVariable String type) {
        return ResponseEntity.ok(eventService.getEventsByType(type));
    }
}
