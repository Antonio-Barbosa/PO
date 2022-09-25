"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const servico_1 = __importDefault(require("../../model/servico"));
const cadastro_1 = __importDefault(require("../cadastro"));
class CadastroServico extends cadastro_1.default {
    constructor(nomeServico) {
        super();
        this.nomeServico = nomeServico;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nVamos cadastrar os serviços: `);
        let nome = this.entrada.receberTexto(`Nome do serviço: `);
        let preco = this.entrada.receberNumero(`Preço do serviço: `);
        let servicos = new servico_1.default(nome, preco);
        this.nomeServico.push(servicos);
        console.log(`\n Cadastro finalizado :).`);
    }
}
exports.default = CadastroServico;
