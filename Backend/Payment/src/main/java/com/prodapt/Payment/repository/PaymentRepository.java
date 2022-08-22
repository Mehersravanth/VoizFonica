package com.prodapt.Payment.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prodapt.Payment.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {

}
