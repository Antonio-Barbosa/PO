"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const deletar_1 = __importDefault(require("../deletar"));
class DeletarServico extends deletar_1.default {
    constructor(servico) {
        super();
        this.servico = servico;
        this.entrada = new entrada_1.default;
    }
    deletar() {
        console.log("\nDeletar serviços:");
        let nome = this.entrada.receberTexto("Nome do serviço: ");
        let servDel = this.servico.find(serv => nome == serv.nome);
        if (servDel != undefined) {
            let index = this.servico.indexOf(servDel);
            this.servico.splice(index, 1);
            console.log("\nServiço deletado!");
        }
        else
            console.log("\nServiço não enconrado.");
    }
}
exports.default = DeletarServico;
