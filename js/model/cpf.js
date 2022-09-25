"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CPF {
    constructor(valor, dataEmissao) {
        this.valor = valor;
        this.dataEmissao = dataEmissao;
    }
    get getValor() {
        return this.valor;
    }
    get getDataEmissao() {
        return this.dataEmissao;
    }
}
exports.default = CPF;
