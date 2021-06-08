package com.springboot.repos;

import com.springboot.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <User, Integer> {

    User findUserByUsernameAndPassword(String username, String password);

}
