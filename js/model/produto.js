"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(nome, preco, produtoID) {
        this.nome = nome;
        this.preco = preco;
        this.produtoID = produtoID;
    }
    get getNome() {
        return this.nome;
    }
    get getPreco() {
        return this.preco;
    }
    get getProdutoID() {
        return this.produtoID;
    }
}
exports.default = Produto;
