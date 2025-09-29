package com.eshopping_backend.eshopping_backend.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eshopping_backend.eshopping_backend.model.Product;
import com.eshopping_backend.eshopping_backend.repository.ProductRepository;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepo;

    // Add product
    public Product addProduct(Product product) {
        return productRepo.save(product);
    }

    // Get all products
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    // Get product details by ID
    public Product getProductById(Long id) {
        return productRepo.findById(id).orElse(null);
    }

    // Get products by Seller
    public List<Product> getProductsBySeller(Long sellerId) {
        return productRepo.findBySellerId(sellerId);
    }
}

