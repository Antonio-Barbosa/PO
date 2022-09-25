"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("../listagem"));
class ListagemClientes extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
    }
    listar() {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Genero: ${cliente.genero}`);
            console.log(`CPF: ${cliente.getCpf.getValor} Emitido em: ${cliente.getCpf.getDataEmissao}`);
            cliente.getRgs.forEach(rg => {
                console.log(`RG: ${rg.getValor} Emitido em: ${rg.getDataEmissao}`);
            });
            cliente.getTelefones.forEach(tel => {
                console.log(`DDD: (${tel.getDdd}) - ${tel.getNumero} `);
            });
            console.log(`Data do cadastro: ` + cliente.getDataCadastro);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
exports.default = ListagemClientes;
