package com.ericsuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ericsuperior.dsmeta.entities.Sale;
import com.ericsuperior.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;
	
	// Read
	public List<Sale> findSales() {
		return repository.findAll();
	}
	
}
