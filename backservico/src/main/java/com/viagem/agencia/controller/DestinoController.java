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

import com.viagem.agencia.entity.Destino;
import com.viagem.agencia.service.DestinoService;

@RestController
@RequestMapping("api/destino")
public class DestinoController {

    @Autowired
    private DestinoService destinoService;
    
    @GetMapping("/")
    @CrossOrigin("http://localhost:3000")
    public List<Destino> buscarTodos(){
        return destinoService.buscarTodos();
    }

    @PostMapping("/")
    @CrossOrigin("http://localhost:3000")
    public Destino inserir(@RequestBody Destino destino){
        return destinoService.inserir(destino);
    }

    @PutMapping("/")
    @CrossOrigin("http://localhost:3000")
    public Destino alterar(@RequestBody Destino destino){
        return destinoService.alterar(destino);
    }

    @DeleteMapping("/{id_destino}")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<Void> excluir(@PathParam("id_destino") Long id_destino){
        destinoService.excluir(id_destino);
        return ResponseEntity.ok().build();
    }
    
    
}
