package com.vg.mangotest.mangobackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;


@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    @GetMapping("/items")
    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    @PostMapping("/items")
    public ResponseEntity<Object> Item(@RequestBody Item item) {
        Item newItem = itemRepository.save(item);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(newItem.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
