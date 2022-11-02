package com.viagem.agencia.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.viagem.agencia.entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente,Long> {
    
}
