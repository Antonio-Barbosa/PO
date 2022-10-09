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
var ListarServMais = /** @class */ (function (_super) {
    __extends(ListarServMais, _super);
    function ListarServMais(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListarServMais.prototype.listar = function () {
        var cliServico = [];
        // Map quantidade serviços mais consumidos
        this.clientes.map(function (cli) {
            cli.getServicosConsumidos.forEach(function (serv) {
                var nome = serv.getNomeServiço;
                var qtd = cliServico[serv.getNomeServiço] = (cliServico[serv.getNomeServiço] || 0) + 1;
                cliServico.push({
                    nome: nome,
                    quantidade: qtd
                });
            });
        });
        var ordenado = cliServico.sort(function (a, b) {
            return b.quantidade - a.quantidade;
        }).slice(0, 1);
        console.log("\nServi\u00E7o mais consumido");
        console.log("-------------------------------------------------------");
        ordenado.forEach(function (consumidos) {
            console.log("Nome: ".concat(consumidos.nome));
            console.log("Quantidade consumida: ".concat(consumidos.quantidade));
            console.log();
        });
    };
    return ListarServMais;
}(listagem_1.default));
exports.default = ListarServMais;
