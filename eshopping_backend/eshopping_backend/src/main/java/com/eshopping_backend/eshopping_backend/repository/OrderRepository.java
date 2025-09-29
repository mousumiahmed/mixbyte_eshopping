package com.eshopping_backend.eshopping_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eshopping_backend.eshopping_backend.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByBuyerId(Long buyerId);
}
