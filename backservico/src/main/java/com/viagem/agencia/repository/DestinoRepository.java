package com.viagem.agencia.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.viagem.agencia.entity.Destino;

public interface DestinoRepository extends JpaRepository<Destino,Long> {
    
}