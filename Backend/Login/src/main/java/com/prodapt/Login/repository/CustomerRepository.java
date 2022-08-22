package com.prodapt.Login.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prodapt.Login.entity.Customer;





public interface CustomerRepository extends JpaRepository<Customer, Integer>{

}
