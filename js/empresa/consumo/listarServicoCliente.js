"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const listagem_1 = __importDefault(require("../listagem"));
;
class ListagemServicoCliente extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    listar() {
        const cpf = this.entrada.receberTexto('Informe CPF do Cliente: ');
        let cliente = this.clientes.find((c) => c.getCpf.getValor === cpf);
        cliente === null || cliente === void 0 ? void 0 : cliente.getServicosConsumidos.forEach((servico) => {
            console.log(servico.nome);
        });
    }
}
exports.default = ListagemServicoCliente;
