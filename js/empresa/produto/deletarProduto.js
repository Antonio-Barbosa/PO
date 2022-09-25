"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const deletar_1 = __importDefault(require("../deletar"));
class DeletarProduto extends deletar_1.default {
    constructor(produto) {
        super();
        this.produto = produto;
        this.entrada = new entrada_1.default();
    }
    deletar() {
        console.log("\nDeletar produtos:\n");
        const idProduto = this.entrada.receberNumero(`Digite o ID do Produto: `);
        let index = this.produto.findIndex(prod => prod.getProdutoID == idProduto);
        if (index != undefined) {
            this.produto.splice(index, 1);
            console.log("Produto deletado!");
        }
        else {
            console.log("Produto não encontrado!");
        }
    }
}
exports.default = DeletarProduto;
