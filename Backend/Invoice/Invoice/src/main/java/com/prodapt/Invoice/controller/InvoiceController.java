package com.prodapt.Invoice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.prodapt.Invoice.entity.Invoice;
import com.prodapt.Invoice.repository.InvoiceRepository;

@RestController
@CrossOrigin
@RequestMapping("/invoice")
public class InvoiceController {
	// create operation
		@Autowired
		private InvoiceRepository cRepository;

		// get all employees
		@GetMapping("/getcontact")
		public List<Invoice> getAllCont() {
			return cRepository.findAll();
		}

		// create employee rest api
		@PostMapping("/addcontact")
		public Invoice createCont(@RequestBody Invoice c) {
			return cRepository.save(c);
		}

}
