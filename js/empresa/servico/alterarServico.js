"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const alterar_1 = __importDefault(require("../alterar"));
class AlterarServico extends alterar_1.default {
    constructor(servico) {
        super();
        this.servico = servico;
        this.entrada = new entrada_1.default();
    }
    alterar() {
        console.log(`\nAlterar serviços:`);
        let nomeDel = this.entrada.receberTexto(`Serviço a ser alterado: `);
        let index = this.servico.findIndex(serv => serv.nome == nomeDel);
        let exe = true;
        while (exe) {
            console.log(`1 - Nome do Serviço.`);
            console.log(`2 - Preço do Serviço.`);
            console.log(`0 - Sair.`);
            let opcao = this.entrada.receberNumero(`Digite uma das Opções Para Atualizar o Serviço: `);
            switch (opcao) {
                case 1:
                    let nome = this.entrada.receberTexto(`Digite o Novo Nome do Serviço: `);
                    this.servico[index].nome = nome;
                    break;
                case 2:
                    let preco = this.entrada.receberNumero(`Digite o Novo Preço do Serviço: `);
                    this.servico[index].preco = preco;
                    break;
                case 0:
                    exe = false;
                    console.log(`Obrigado!.`);
                    break;
                default:
                    console.log(`Digite Uma Opção Válida!.`);
            }
        }
    }
}
exports.default = AlterarServico;
