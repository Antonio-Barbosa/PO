"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const produto_1 = __importDefault(require("../../model/produto"));
const cadastro_1 = __importDefault(require("../cadastro"));
;
class CadastroProdutos extends cadastro_1.default {
    constructor(produto) {
        super();
        this.produto = produto;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nVamos cadastrar os produtos ;)\n`);
        let nome = this.entrada.receberTexto(`Nome do produto: `);
        let preco = this.entrada.receberNumero(`Preço do produto: `);
        let id = this.entrada.receberNumero(`ID do produto: `);
        let prod = new produto_1.default(nome, preco, id);
        this.produto.push(prod);
        console.log(`\n Cadastro finalizado :)`);
    }
}
exports.default = CadastroProdutos;
