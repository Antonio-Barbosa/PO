"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listagem_1 = __importDefault(require("../listagem"));
var ListaMenorConsumo = /** @class */ (function (_super) {
    __extends(ListaMenorConsumo, _super);
    function ListaMenorConsumo(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListaMenorConsumo.prototype.listar = function () {
        var nome, cpf, consumoTotal, ordenacao;
        var qtdConsumido = [];
        var i = 1;
        this.clientes.forEach(function (cliente) {
            nome = cliente.nome;
            cpf = cliente.getCpf.getValor;
            consumoTotal = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            qtdConsumido.push({
                nome: nome,
                cpf: cpf,
                quantidade: consumoTotal,
                posicao: i
            });
            i = i + 1;
        });
        ordenacao = qtdConsumido.sort(function (x, y) {
            return y.quantidade - x.quantidade;
        });
        ordenacao.reverse();
        ordenacao = ordenacao.slice(0, 10);
        console.log("Listagem dos 10 Clientes que MENOS consumiram produtos ou servicos em quantidade.");
        console.log("\n--------------------------------------\n");
        ordenacao.forEach(function (cliente) {
            console.log("Nome do Cliente: ".concat(cliente.nome));
            console.log("CPF do Cliente: ".concat(cliente.cpf));
            console.log("Quantidade de produtos e servicos Consumido pelo Cliente: ".concat(cliente.quantidade));
            console.log("\n--------------------------------------\n");
        });
    };
    return ListaMenorConsumo;
}(listagem_1.default));
exports.default = ListaMenorConsumo;
