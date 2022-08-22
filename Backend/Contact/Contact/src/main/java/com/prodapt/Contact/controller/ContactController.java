package com.prodapt.Contact.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prodapt.Contact.entity.Contact;
import com.prodapt.Contact.repository.ContactRepository;



@RestController
@CrossOrigin
@RequestMapping("/contact")
public class ContactController {
	// create operation
	@Autowired
	private ContactRepository cRepository;

	// get all employees
	@GetMapping("/getcontact")
	public List<Contact> getAllCont() {
		return cRepository.findAll();
	}

	// create employee rest api
	@PostMapping("/addcontact")
	public Contact createCont(@RequestBody Contact c) {
		return cRepository.save(c);
	}

}
