package com.springboot.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @GetMapping("/")
    public String getAllUsers() {
        return "Route up and running!";
    }

    @PostMapping("/addUser")
    public String addUser() {
        return "Post route up and connected";
    }

    @PutMapping("/updateUser")
    public String updateUser() {
        return "Updated user route connected";
    }

}
