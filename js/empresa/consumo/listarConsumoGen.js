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
var ListarConsumoGen = /** @class */ (function (_super) {
    __extends(ListarConsumoGen, _super);
    function ListarConsumoGen(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListarConsumoGen.prototype.listar = function () {
        var filtrado;
        var feminino;
        // -- Filtro por Gênero --
        filtrado = this.clientes.reduce(function (acc, cur) {
            cur.getProdutosConsumidos.forEach(function (p) {
                if (acc[cur.genero]["produto_".concat(p.getProdutoID)]) {
                    acc[cur.genero]["produto_".concat(p.getProdutoID)].qtd++;
                }
                else {
                    acc[cur.genero]["produto_".concat(p.getProdutoID)] = { qtd: 1, nome: p.getNome };
                }
            });
            cur.getServicosConsumidos.forEach(function (s) {
                if (acc[cur.genero]["servico_".concat(s.id)]) {
                    acc[cur.genero]["servico_".concat(s.id)].qtd++;
                }
                else {
                    acc[cur.genero]["servico_".concat(s.id)] = { qtd: 1, nome: s.getNomeServiço };
                }
            });
            return acc;
        }, { M: {}, F: {} });
        var ordenadoM = Object.keys(filtrado.M).map(function (k) {
            var _a = k.split("_"), tipo = _a[0], id = _a[1];
            return { id: id, tipo: tipo, qtd: filtrado.M[k].qtd, nome: filtrado.M[k].nome };
        }).sort(function (a, b) { return b.qtd - a.qtd; }).slice(0, 3);
        var ordenadoF = Object.keys(filtrado.F).map(function (k) {
            var _a = k.split("_"), tipo = _a[0], id = _a[1];
            return { id: id, tipo: tipo, qtd: filtrado.F[k].qtd, nome: filtrado.F[k].nome };
        }).sort(function (a, b) { return b.qtd - a.qtd; }).slice(0, 3);
        console.log("Listagem dos servi\u00E7os ou produtos mais consumidos por g\u00EAnero");
        console.log("\n--------------------------------------\n");
        console.log("Masculino");
        ordenadoM.forEach(function (items, index) {
            console.log("".concat(index + 1, "\u00B0"));
            console.log("Id do ".concat(items.tipo, ": ").concat(items.id));
            console.log("Nome do ".concat(items.tipo, ": ").concat(items.nome));
            console.log("Quantidade Consumido: ".concat(items.qtd, "\n"));
        });
        console.log("\n--------------------------------------\n");
        console.log("Feminino");
        ordenadoF.forEach(function (items, index) {
            console.log("".concat(index + 1, "\u00B0"));
            console.log("Id do produto: ".concat(items.id));
            console.log("Nome do ".concat(items.tipo, ": ").concat(items.nome));
            console.log("Quantidade Consumido: ".concat(items.qtd, "\n"));
        });
        console.log("\n--------------------------------------\n");
    };
    return ListarConsumoGen;
}(listagem_1.default));
exports.default = ListarConsumoGen;
