package com.pi.curriculoaqui.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.web.bind.annotation.Mapping;

@Entity
public class Curriculo implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long codigo;

	// informações pessoais
	
	@Column(name = "nome")
	private String nome;
	
	@Column(name = "rua")
	private String rua;

	@Column(name = "bairro")
	private String bairro;

	@Column(name = "cep")
	private String cep;

	@Column(name = "cidade")
	private String cidade;

	@Column(name = "telefone")
	private String telefone;

	@Column(name = "celular")
	private String celular;

	@Column(name = "email")
	private String email;

	@Column(name = "idade")
	private int idade;
	
	// objetivo/experiencia profissional
	@Column(name = "cargoAtual")
	private String cargoAtual;

	@Column(name = "cargoExercido")
	private String cargoExercido;
	
	// informações adicionais
	@Column(name = "idiomas")
	private String idiomas;

	@Column(name = "formacaoAcademica")
	private String formacaoAcademica;

	@Column(name = "cursos")
	private String cursos;
	
	public long getCodigo() {
		return codigo;
	}
	public void setCodigo(long codigo) {
		this.codigo = codigo;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getRua() {
		return rua;
	}
	public void setRua(String rua) {
		this.rua = rua;
	}
	public String getBairro() {
		return bairro;
	}
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getCelular() {
		return celular;
	}
	public void setCelular(String celular) {
		this.celular = celular;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getIdade() {
		return idade;
	}
	public void setIdade(int idade) {
		this.idade = idade;
	}
	public String getCargoAtual() {
		return cargoAtual;
	}
	public void setCargoAtual(String cargoAtual) {
		this.cargoAtual = cargoAtual;
	}
	public String getCargoExercido() {
		return cargoExercido;
	}
	public void setCargoExercido(String cargoExercido) {
		this.cargoExercido = cargoExercido;
	}
	public String getIdiomas() {
		return idiomas;
	}
	public void setIdiomas(String idiomas) {
		this.idiomas = idiomas;
	}
	public String getFormacaoAcademica() {
		return formacaoAcademica;
	}
	public void setFormacaoAcademica(String formacaoAcademica) {
		this.formacaoAcademica = formacaoAcademica;
	}
	public String getCursos() {
		return cursos;
	}
	public void setCursos(String cursos) {
		this.cursos = cursos;
	}
}
