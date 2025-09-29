package com.eshopping_backend.eshopping_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eshopping_backend.eshopping_backend.model.Order;
import com.eshopping_backend.eshopping_backend.repository.OrderRepository;
import com.eshopping_backend.eshopping_backend.service.OrderService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired private OrderRepository orderRepo;

    @PostMapping("/place")
    public Order place(@RequestBody Order o){ return orderRepo.save(o); }

    @GetMapping("/buyer/{id}")
    public List<Order> getBuyerOrders(@PathVariable Long id){
        return orderRepo.findByBuyerId(id);
    }
}

