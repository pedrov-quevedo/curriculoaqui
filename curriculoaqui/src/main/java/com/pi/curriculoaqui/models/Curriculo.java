package com.pi.curriculoaqui.models;

public class Curriculo {
	
	// informações pessoais
	private String nome;
	private String rua;
	private String bairro;
	private String cep;
	private String cidade;
	private String telefone;
	private String celular;
	private String email;
	private int idade;
	
	// objetivo/experiencia profissional
	private String cargoAtual;
	private String experiencia;
	private String cargoExercido;
	
	// informações adicionais
	private String idiomas;
	private String formacaoAcademica;
	private String cursos;
	
	
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
	public String getExperiencia() {
		return experiencia;
	}
	public void setExperiencia(String experiencia) {
		this.experiencia = experiencia;
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
