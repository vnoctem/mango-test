package com.vg.mangotest.mangobackend;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user/login")
    public ResponseEntity<Object> login(@RequestBody User user) {
        List<User> users = userRepository.findAll();

        for (User otherUser : users) {
            if (otherUser.getUsername().equals(user.getUsername()) && otherUser.getPassword().equals(user.getPassword())) {
                return new ResponseEntity<>(HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
