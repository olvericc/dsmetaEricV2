package com.ericsuperior.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ericsuperior.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
}