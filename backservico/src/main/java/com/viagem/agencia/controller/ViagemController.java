package com.viagem.agencia.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.viagem.agencia.entity.Viagem;
import com.viagem.agencia.service.ViagemService;

@RestController
@RequestMapping("api/viagem")
public class ViagemController {

    @Autowired
    private ViagemService viagemService;
    
    @GetMapping("/")
    @CrossOrigin("http://localhost:3000")
    public List<Viagem> buscarTodos(){
        return viagemService.buscarTodos();
    }

    @PostMapping("/")
    @CrossOrigin("http://localhost:3000")
    public Viagem inserir(@RequestBody Viagem viagem){
        return viagemService.inserir(viagem);
    }

    @PutMapping("/")
    @CrossOrigin("http://localhost:3000")
    public Viagem alterar(@RequestBody Viagem viagem){
        return viagemService.alterar(viagem);
    }

    @DeleteMapping("/{id_destino}")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<Void> excluir(@PathParam("id") Long id){
        viagemService.excluir(id);
        return ResponseEntity.ok().build();
    }
    
    
}
