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
var entrada_1 = __importDefault(require("../../io/entrada"));
var listagem_1 = __importDefault(require("../listagem"));
;
var ListarServicoCliente = /** @class */ (function (_super) {
    __extends(ListarServicoCliente, _super);
    function ListarServicoCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    ListarServicoCliente.prototype.listar = function () {
        var nome = this.entrada.receberTexto('Informe o nome do cliente: ');
        var cliente = this.clientes.find(function (cli) { return cli.nome === nome; });
        cliente === null || cliente === void 0 ? void 0 : cliente.getServicosConsumidos.forEach(function (servico) {
            console.log("Servi\u00E7o: ".concat(servico.nome, " Pre\u00E7o: ").concat(servico.preco));
        });
        cliente === null || cliente === void 0 ? void 0 : cliente.getProdutosConsumidos.forEach(function (produto) {
            console.log("Produto: ".concat(produto.nome, " Pre\u00E7o: ").concat(produto.preco));
        });
    };
    return ListarServicoCliente;
}(listagem_1.default));
exports.default = ListarServicoCliente;
