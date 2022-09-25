"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const alterar_1 = __importDefault(require("../alterar"));
class AlterarProduto extends alterar_1.default {
    constructor(produto) {
        super();
        this.produto = produto;
        this.entrada = new entrada_1.default();
    }
    alterar() {
        console.log(`\nAlterar produto:`);
        let id = this.entrada.receberNumero(`Digite o ID do produto: `);
        let index = this.produto.findIndex(prod => prod.getProdutoID == id);
        let exe = true;
        while (exe) {
            console.log(`1 - Nome do produto: `);
            console.log(`2 - Preço do produto: `);
            console.log(`0 - Finalizar`);
            let opcao = this.entrada.receberNumero(`Digite a opção desejada: `);
            switch (opcao) {
                case 1:
                    let nome = this.entrada.receberTexto(`Digite o Novo Nome do Produto: `);
                    this.produto[index].nome = nome;
                    break;
                case 2:
                    let preco = this.entrada.receberNumero(`Digite o Novo Preço do Produto: `);
                    this.produto[index].preco = preco;
                    break;
                case 0:
                    exe = false;
                    console.log(`Obrigado!`);
                    break;
                default:
                    console.log(`Digite Uma Opção Válida!`);
            }
        }
    }
}
exports.default = AlterarProduto;
