package com.viagem.agencia.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.viagem.agencia.entity.Destino;
import com.viagem.agencia.repository.DestinoRepository;

@Service
public class DestinoService {
    
    @Autowired
    private DestinoRepository destinoRepository;

    public List<Destino> buscarTodos(){
        return destinoRepository.findAll();
    }

    public Destino inserir(Destino destino){
        Destino destinoBanco = destinoRepository.saveAndFlush(destino);
        return destinoBanco;
    }

    public Destino alterar(Destino destino){
        return destinoRepository.save(destino);
    }

    public void excluir(Long id_destino){
        Destino destino = destinoRepository.findById(id_destino).get();
        destinoRepository.delete(destino);
    }
}
