package com.springboot.controllers;

import com.springboot.dtos.Credentials;
import com.springboot.models.User;
import com.springboot.repos.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.time.LocalDateTime;
import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/users")
public class UserController {

    private UserRepository userRepo;
    private Logger logger = LoggerFactory.getLogger(UserController.class);

    public UserController(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping(value="/getAll", produces= APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
    public List<User> test() {
        logger.info("Grabbing all registered Users");
        return userRepo.findAll();
    }

    @PostMapping(value="/addUser", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
    public User registerNewUser(@RequestBody @Valid User newUser) {
        logger.info("USER REGISTERED invoked at {}", LocalDateTime.now());
        return userRepo.save(newUser);
    }

    @PostMapping(value="/login", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
    public void loginUser(@RequestBody @Valid Credentials creds) {
        logger.info("User logged in");
        User user = userRepo.findUserByUsernameAndPassword(creds.getUsername(), creds.getPassword());

        if(user != null) {
            logger.info("Successfully Logged in {}", user);
        } else {
            logger.info("Login Failed, please check credentials and try again");
        }

    }

    @DeleteMapping(value="/deleteUser")
    public void deleteUser(@RequestBody int id) {
        logger.info("DELETE USER {} invoked at {}", id, LocalDateTime.now());
        try {
            userRepo.deleteById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
