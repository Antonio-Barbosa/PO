"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RG {
    constructor(valor, dataEmisao) {
        this.valor = valor;
        this.dataEmissao = dataEmisao;
    }
    get getValor() {
        return this.valor;
    }
    get getDataEmissao() {
        return this.dataEmissao;
    }
}
exports.default = RG;
