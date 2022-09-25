"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const deletar_1 = __importDefault(require("../deletar"));
class DeletarCliente extends deletar_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    deletar() {
        console.log("\nDeletar cliente:");
        let nome = this.entrada.receberTexto(`Cliente que deseja deletar: `);
        let nomeDel = this.clientes.find(cli => nome == cli.nome);
        if (nomeDel != undefined) {
            let index = this.clientes.indexOf(nomeDel);
            this.clientes.splice(index, 1);
            console.log("\nCliente deletado!");
        }
        else
            console.log("\nCliente não encontrado!");
    }
}
exports.default = DeletarCliente;
