"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("./listagem"));
class listagemGenero extends listagem_1.default {
    constructor(cliente) {
        super();
        this.clientes = cliente;
    }
    listar() {
        let feminino = [];
        let masculino = [];
        let naoInformado = [];
        this.clientes.forEach(clientes => {
            if (clientes.genero === "M") {
                masculino.push(clientes);
            }
            if (clientes.genero === "F") {
                feminino.push(clientes);
            }
            if (clientes.genero === "NI") {
                naoInformado.push(clientes);
            }
        });
        console.log("Listagem de Clientes por Gênero");
        console.log('      ');
        console.log('Clientes do Gênero Feminino:');
        console.log('      ');
        feminino.forEach(fem => {
            console.log(`Nome: ` + fem.nome);
            console.log(`Nome social: ` + fem.nomeSocial);
            console.log(`CPF: ` + fem.getCpf.getValor);
            console.log(`------------------`);
            console.log('      ');
        });
        console.log('Clientes do Gênero Masculino:');
        console.log('      ');
        masculino.forEach(masc => {
            console.log(`Nome: ` + masc.nome);
            console.log(`Nome social: ` + masc.nomeSocial);
            console.log(`CPF: ` + masc.getCpf.getValor);
            console.log(`-------------------`);
            console.log('      ');
        });
        console.log('Clientes que Não informaram Gênero:');
        naoInformado.forEach(naoInf => {
            console.log(`Nome: ` + naoInf.nome);
            console.log(`Nome social: ` + naoInf.nomeSocial);
            console.log(`CPF: ` + naoInf.getCpf.getValor);
            console.log(`----------------`);
            console.log('      ');
        });
    }
}
exports.default = listagemGenero;
