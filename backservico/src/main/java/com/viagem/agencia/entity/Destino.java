package com.viagem.agencia.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Destino")
public class Destino {
    
	private static final long serialVersionUID = 2L;

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_destino;
    private String cidade;
    private String pais;
    private Double valor;

    public Long getId_destino() {
		return id_destino;
	}
	public void setId_destino(Long id_destino) {
		this.id_destino = id_destino;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getPais() {
		return pais;
	}
	public void setPais(String pais) {
		this.pais = pais;
	}
	public Double getValor() {
		return valor;
	}
	public void setValor(Double valor) {
		this.valor = valor;
	}
}
