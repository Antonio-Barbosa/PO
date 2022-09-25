"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const cadastro_1 = __importDefault(require("../cadastro"));
class ConsumoCliente extends cadastro_1.default {
    constructor(empresa) {
        super();
        this.entrada = new entrada_1.default();
        this.empresa = empresa;
    }
    cadastrar() {
        var _a, _b, _c;
        const nome = this.entrada.receberTexto('Informe o nome do Cliente: ');
        this.clienteSel = this.empresa.getCliente.find(cliente => cliente.nome === nome);
        let execucao = true;
        while (execucao) {
            console.log("----------------------");
            console.log(`Opeção de consumo.`);
            console.log(`1 - Produto`);
            console.log(`2 - Serviço`);
            console.log(`0 - Sair`);
            let opcao = this.entrada.receberNumero('Insira a Opção:  ');
            switch (opcao) {
                case 1:
                    let nomeProduto = this.entrada.receberTexto('Escreva o Nome do Produto: ');
                    let produto = this.empresa.getProdutos.find(prod => prod.nome === nomeProduto);
                    (_a = this.clienteSel) === null || _a === void 0 ? void 0 : _a.addProduto(produto);
                    break;
                case 2:
                    const nomeServico = this.entrada.receberTexto('Informe o Nome do Serviço:  ');
                    this.servicoSel = this.empresa.getServicos.find(servico => servico.nome === nomeServico);
                    console.log((_b = this.servicoSel) === null || _b === void 0 ? void 0 : _b.nome);
                    (_c = this.clienteSel) === null || _c === void 0 ? void 0 : _c.addServicos(this.servicoSel);
                    break;
                case 0:
                    execucao = false;
                    console.log(`Obrigado!`);
                    break;
                default:
                    console.log(`Digite Uma Opção Válida!`);
            }
        }
        console.log(`\nInserido com Sucesso`);
    }
}
exports.default = ConsumoCliente;
