"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(nome, preco, produtoID) {
        this.nome = nome;
        this.preco = preco;
        this.produtoID = produtoID;
    }
    Object.defineProperty(Produto.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getPreco", {
        get: function () {
            return this.preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getProdutoID", {
        get: function () {
            return this.produtoID;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
exports.default = Produto;
