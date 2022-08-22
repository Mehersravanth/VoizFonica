package com.prodapt.Invoice.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prodapt.Invoice.entity.Invoice;
import com.prodapt.Invoice.repository.InvoiceRepository;

@Service
@Transactional
public class InvoiceService {
	@Autowired
	private InvoiceRepository invoiceRepo;
	public Invoice saveInvoice(Invoice invoice) {
		return invoiceRepo.save(invoice);
	}
	public Optional<Invoice> fetchInvoiceByUserId(Integer userId) {
		return invoiceRepo.findById(userId);
	}
	public List<Invoice> fetchAllIssues(){
		return invoiceRepo.findAll();
	}
}
