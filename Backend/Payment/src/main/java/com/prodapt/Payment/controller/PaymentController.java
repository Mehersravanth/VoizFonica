package com.prodapt.Payment.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prodapt.Payment.entity.Payment;
import com.prodapt.Payment.repository.PaymentRepository;

@RestController
@CrossOrigin
@RequestMapping("/payment")
public class PaymentController {
	// create operation
		@Autowired
		private PaymentRepository pRepository;

		// get all employees
		@GetMapping("/getpayment")
		public List<Payment> getAllPs() {
			return pRepository.findAll();
		}

		// create employee rest api
		@PostMapping("/addpayment")
		public Payment createP(@RequestBody Payment p) {
			return pRepository.save(p);
		}

		

}
