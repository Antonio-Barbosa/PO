"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, nomeSocial, cpf, genero) {
        this.nome = nome;
        this.genero = genero;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.dataCadastro = new Date();
        this.rgs = [];
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    get getCpf() {
        return this.cpf;
    }
    get getRgs() {
        return this.rgs;
    }
    get getDataCadastro() {
        return this.dataCadastro;
    }
    get getTelefones() {
        return this.telefones;
    }
    get getProdutosConsumidos() {
        return this.produtosConsumidos;
    }
    get getServicosConsumidos() {
        return this.servicosConsumidos;
    }
    set setCpf(cpf) {
        this.cpf = cpf;
    }
    set setRg(rg) {
        this.rgs = rg;
    }
    set setDataCadastro(data) {
        this.dataCadastro = data;
    }
    set setTelefone(telefone) {
        this.telefones = telefone;
    }
    addTelefones(telefone) {
        this.telefones.push(telefone);
    }
    addRgs(rg) {
        this.rgs.push(rg);
    }
    addServicos(servico) {
        if (!servico) {
            console.log("Serviço Não Encotrado!");
        }
        else {
            this.servicosConsumidos.push(servico);
            console.log('Serviço Adicionado!');
        }
    }
    addProduto(produto) {
        if (!produto) {
            console.log("Produto Não Encontrado!");
        }
        else {
            this.produtosConsumidos.push(produto);
            console.log("Produto Adicionado!");
        }
    }
}
exports.default = Cliente;
