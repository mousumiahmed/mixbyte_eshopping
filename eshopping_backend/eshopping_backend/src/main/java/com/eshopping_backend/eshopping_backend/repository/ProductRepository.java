package com.eshopping_backend.eshopping_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eshopping_backend.eshopping_backend.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findBySellerId(Long sellerId);
}
