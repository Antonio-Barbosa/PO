"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const telefone_1 = __importDefault(require("../../model/telefone"));
const alterar_1 = __importDefault(require("../alterar"));
class AlterarCliente extends alterar_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    alterar() {
        console.log('\nAlterar cliente:');
        let nome = this.entrada.receberTexto(`Digite o nome do cliente: `);
        let index = this.clientes.findIndex(cli => cli.nome == nome);
        let exe = true;
        while (exe) {
            console.log(`1 - Nome`);
            console.log(`2 - Nome Social`);
            console.log(`3 - Telefone`);
            console.log(`0 - Sair.`);
            let opcao = this.entrada.receberNumero('Digite uma das Opções Para Editar: ');
            switch (opcao) {
                case 1:
                    let nome = this.entrada.receberTexto('Digite o Novo Nome: ');
                    this.clientes[index].nome = nome;
                    break;
                case 2:
                    let nomeSocial = this.entrada.receberTexto(`Digite o Novo Nome Social: `);
                    this.clientes[index].nomeSocial = nomeSocial;
                    break;
                case 3:
                    let ddd = this.entrada.receberTexto(`Digite o Novo DDD: `);
                    let telefone = this.entrada.receberTexto(`Digite o Novo Número: `);
                    let tel = new telefone_1.default(ddd, telefone);
                    this.clientes[index].addTelefones(tel);
                    break;
                case 0:
                    exe = false;
                    console.log('Saindo.');
                    break;
                default:
                    console.log('Digite uma Opção Válida!.');
            }
        }
    }
}
exports.default = AlterarCliente;
