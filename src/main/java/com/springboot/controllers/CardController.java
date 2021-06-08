package com.springboot.controllers;

import com.springboot.models.FlashCard;
import com.springboot.repos.CardRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/cards")
public class CardController {

    private CardRepository cardRepo;
    private Logger logger = LoggerFactory.getLogger(CardController.class);

    public CardController(CardRepository cardRepo) {
        this.cardRepo = cardRepo;
    }

    @GetMapping(value = "/test", produces = APPLICATION_JSON_VALUE)
    public List<FlashCard> getAllCards() {
        logger.info("Get all cards fired.");
        return cardRepo.findAll();
    }

    @PostMapping(value="/addCard", produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
    public FlashCard addCard(@RequestBody @Valid FlashCard card) {
        logger.info("Card saved.");
        return cardRepo.save(card);
    }

    @DeleteMapping(value="/deleteCard")
    public void deleteCard(@RequestBody int id) {
        logger.info("Delete Card fired.");
        cardRepo.deleteById(id);
    }
}
