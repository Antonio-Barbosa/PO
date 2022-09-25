"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const cliente_1 = __importDefault(require("../../model/cliente"));
const cpf_1 = __importDefault(require("../../model/cpf"));
const rg_1 = __importDefault(require("../../model/rg"));
const telefone_1 = __importDefault(require("../../model/telefone"));
const cadastro_1 = __importDefault(require("../cadastro"));
class CadastroCliente extends cadastro_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nVamos cadastrar os cliente ;)`);
        let nome = this.entrada.receberTexto(`Nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Nome social do cliente: `);
        let genero = this.entrada.receberTexto(`Qual genero (F-Feminino) (M-Masculino): `);
        let valor = this.entrada.receberTexto(`Número do CPF: `);
        let data = this.entrada.receberTexto(`Data da emissão do CPF no formato (dd/mm/aa): `);
        let valorRg = this.entrada.receberTexto(`Número do RG: `);
        let dataRg = this.entrada.receberTexto(`Data emissão RG:`);
        let dddTel = this.entrada.receberTexto(`DDD telefone: `);
        let numeroTel = this.entrada.receberTexto(`Numero telefone: `);
        let partesData = data.split('/');
        let ano = new String(partesData[2].valueOf()).valueOf();
        let mes = new String(partesData[1].valueOf()).valueOf();
        let dia = new String(partesData[0].valueOf()).valueOf();
        let dataEmissao = (dia + '/' + mes + '/' + ano);
        partesData = dataRg.split("/");
        let anoRg = new String(partesData[2].valueOf()).valueOf();
        let mesRg = new String(partesData[1].valueOf()).valueOf();
        let diaRg = new String(partesData[0].valueOf()).valueOf();
        let dataEmissaoRg = (`${diaRg}/${mesRg}/${anoRg}`);
        let tel = new telefone_1.default(dddTel, numeroTel);
        let cpf = new cpf_1.default(valor, dataEmissao);
        let rg = new rg_1.default(valorRg, dataEmissaoRg);
        let cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        cliente.addRgs(rg);
        cliente.addTelefones(tel);
        this.clientes.push(cliente);
        console.log(`\n Cadastro finalizado :)`);
    }
}
exports.default = CadastroCliente;
