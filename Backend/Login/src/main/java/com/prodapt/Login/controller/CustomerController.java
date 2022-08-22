package com.prodapt.Login.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prodapt.Login.entity.Customer;
import com.prodapt.Login.repository.CustomerRepository;




@RestController
@CrossOrigin
@RequestMapping("/regs")
public class CustomerController {
	// create operation
	@Autowired
	private CustomerRepository vfRepository;

	// get all employees
	@GetMapping("/getservice")
	public List<Customer> getAllVFs() {
		return vfRepository.findAll();
	}

	// create employee rest api
	@PostMapping("/addservice")
	public Customer createVF(@RequestBody Customer vf) {
		return vfRepository.save(vf);
	}

	

	
}
