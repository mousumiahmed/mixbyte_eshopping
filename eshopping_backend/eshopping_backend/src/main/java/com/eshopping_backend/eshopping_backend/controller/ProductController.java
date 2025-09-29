package com.eshopping_backend.eshopping_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eshopping_backend.eshopping_backend.model.Product;
import com.eshopping_backend.eshopping_backend.repository.ProductRepository;
import com.eshopping_backend.eshopping_backend.service.ProductService;


@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired private ProductRepository productRepo;

    @GetMapping("/")
    public List<Product> getAll(){ return productRepo.findAll(); }

    @PostMapping("/add")
    public Product add(@RequestBody Product p){ return productRepo.save(p); }

    @GetMapping("/seller/{id}")
    public List<Product> getSellerProducts(@PathVariable Long id){
        return productRepo.findBySellerId(id);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteProduct(@PathVariable Long id){
        productRepo.deleteById(id);
    }

}



