package com.prodapt.Contact.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prodapt.Contact.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Integer>{

	

}
