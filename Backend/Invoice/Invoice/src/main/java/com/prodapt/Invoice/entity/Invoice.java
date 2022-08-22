package com.prodapt.Invoice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "invoice")
public class Invoice {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	 int id;
	 int invoiceId;              
	 int userId;               
	 int planId;              
	 String rechargeDate;     
	 int rechargeAmount;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getInvoiceId() {
		return invoiceId;
	}
	public void setInvoiceId(int invoiceId) {
		this.invoiceId = invoiceId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getPlanId() {
		return planId;
	}
	public void setPlanId(int planId) {
		this.planId = planId;
	}
	public String getRechargeDate() {
		return rechargeDate;
	}
	public void setRechargeDate(String rechargeDate) {
		this.rechargeDate = rechargeDate;
	}
	public int getRechargeAmount() {
		return rechargeAmount;
	}
	public void setRechargeAmount(int rechargeAmount) {
		this.rechargeAmount = rechargeAmount;
	}
	@Override
	public String toString() {
		return "Invoice [id=" + id + ", invoiceId=" + invoiceId + ", userId=" + userId + ", planId=" + planId
				+ ", rechargeDate=" + rechargeDate + ", rechargeAmount=" + rechargeAmount + "]";
	}
	public Invoice(int id, int invoiceId, int userId, int planId, String rechargeDate, int rechargeAmount) {
		super();
		this.id = id;
		this.invoiceId = invoiceId;
		this.userId = userId;
		this.planId = planId;
		this.rechargeDate = rechargeDate;
		this.rechargeAmount = rechargeAmount;
	}
	public Invoice() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	 
}
