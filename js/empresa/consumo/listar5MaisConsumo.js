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
var Listar5MaisConsumo = /** @class */ (function (_super) {
    __extends(Listar5MaisConsumo, _super);
    function Listar5MaisConsumo(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    Listar5MaisConsumo.prototype.listar = function () {
        var consumoQtd = [];
        this.clientes.forEach(function (cliente) {
            var cpf = cliente.getCpf.getValor;
            var nome = cliente.nome;
            var nomeSocial = cliente.nomeSocial;
            var consumoTotal = 0;
            // -- Produto --
            cliente.getProdutosConsumidos.forEach(function (produto) {
                consumoTotal = consumoTotal + produto.getPreco;
            });
            // -- Servico --
            cliente.getServicosConsumidos.forEach(function (servico) {
                consumoTotal = consumoTotal + servico.getPrecoServiço;
            });
            consumoQtd.push({
                nome: nome,
                cpf: cpf,
                nomeSocial: nomeSocial,
                quantidade: consumoTotal
            });
        });
        consumoQtd = consumoQtd.sort(function (a, b) {
            return b.quantidade - a.quantidade;
        });
        consumoQtd = consumoQtd.slice(0, 5);
        console.log("Top 5 Clientes que mais consumiram (em valor): ");
        console.log("\n-------------------------------------------------------\n");
        consumoQtd.forEach(function (cliente) {
            console.log("CPF: " + cliente.cpf);
            console.log("Nome do cliente: " + cliente.nome);
            console.log("Nome Social: " + cliente.nomeSocial);
            console.log("Valor Consumido: R$ ".concat(cliente.quantidade, " reais"));
            console.log("-----------------------------------");
        });
    };
    return Listar5MaisConsumo;
}(listagem_1.default));
exports.default = Listar5MaisConsumo;
