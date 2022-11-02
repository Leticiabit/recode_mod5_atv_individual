package com.viagem.agencia.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.viagem.agencia.entity.Cliente;
import com.viagem.agencia.repository.ClienteRepository;

@Service
public class ClienteService {
    
    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> buscarTodos(){
        return clienteRepository.findAll();
    }

    public Cliente inserir(Cliente cliente){
        Cliente clienteBanco = clienteRepository.saveAndFlush(cliente);
        return clienteBanco;
    }

    public Cliente alterar(Cliente cliente){
        return clienteRepository.save(cliente);
    }

    public void excluir(Long id){
        Cliente cliente = clienteRepository.findById(id).get();
        clienteRepository.delete(cliente);
    }
}
