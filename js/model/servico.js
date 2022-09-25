"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Servico {
    constructor(nome, preco) {
        this.preco = preco;
        this.nome = nome;
    }
    get getNomeServiço() {
        return this.nome;
    }
    get getPrecoServiço() {
        return this.preco;
    }
}
exports.default = Servico;
