package com.viagem.agencia.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.viagem.agencia.entity.Viagem;

public interface ViagemRepository extends JpaRepository<Viagem,Long> {
    
}