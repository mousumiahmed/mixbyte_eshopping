package com.eshopping_backend.eshopping_backend.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eshopping_backend.eshopping_backend.model.Order;
import com.eshopping_backend.eshopping_backend.repository.OrderRepository;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepo;

    // Place order
    public Order placeOrder(Order order) {
        return orderRepo.save(order);
    }

    // Get orders by Buyer
    public List<Order> getOrdersByBuyer(Long buyerId) {
        return orderRepo.findByBuyerId(buyerId);
    }
}

