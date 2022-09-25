"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("../listagem"));
class ListagemProdutos extends listagem_1.default {
    constructor(prodCadastrado) {
        super();
        this.prodCadastrado = prodCadastrado;
    }
    listar() {
        console.log(`\nLista de todos os produtos:\n `);
        this.prodCadastrado.forEach(prod => {
            console.log(`Nome: ${prod.nome} \nPreço R$: ${prod.preco} ID:${prod.getProdutoID}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
exports.default = ListagemProdutos;
