package com.viagem.agencia.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.viagem.agencia.entity.Viagem;
import com.viagem.agencia.repository.ViagemRepository;

@Service
public class ViagemService {
    
    @Autowired
    private ViagemRepository viagemRepository;

    public List<Viagem> buscarTodos(){
        return viagemRepository.findAll();
    }

    public Viagem inserir(Viagem viagem){
        Viagem viagemBanco = viagemRepository.saveAndFlush(viagem);
        return viagemBanco;
    }

    public Viagem alterar(Viagem viagem){
        return viagemRepository.save(viagem);
    }

    public void excluir(Long id){
        Viagem viagem = viagemRepository.findById(id).get();
        viagemRepository.delete(viagem);
    }
}
