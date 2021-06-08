package com.springboot.repos;

import com.springboot.models.FlashCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository <FlashCard, Integer> {
}
