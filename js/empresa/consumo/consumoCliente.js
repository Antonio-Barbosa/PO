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
var cadastro_1 = __importDefault(require("../cadastro"));
var ConsumoCliente = /** @class */ (function (_super) {
    __extends(ConsumoCliente, _super);
    function ConsumoCliente(empresa) {
        var _this = _super.call(this) || this;
        _this.entrada = new entrada_1.default();
        _this.empresa = empresa;
        return _this;
    }
    ConsumoCliente.prototype.cadastrar = function () {
        var _a, _b, _c;
        var nome = this.entrada.receberTexto('Informe o nome do Cliente: ');
        this.clienteSel = this.empresa.getCliente.find(function (cliente) { return cliente.nome === nome; });
        var execucao = true;
        var _loop_1 = function () {
            console.log("----------------------");
            console.log("Ope\u00E7\u00E3o de consumo.");
            console.log("1 - Produto");
            console.log("2 - Servi\u00E7o");
            console.log("0 - Sair");
            var opcao = this_1.entrada.receberNumero('Insira a Opção:  ');
            switch (opcao) {
                case 1:
                    var nomeProduto_1 = this_1.entrada.receberTexto('Escreva o Nome do Produto: ');
                    var produto = this_1.empresa.getProdutos.find(function (prod) { return prod.nome === nomeProduto_1; });
                    (_a = this_1.clienteSel) === null || _a === void 0 ? void 0 : _a.addProduto(produto);
                    break;
                case 2:
                    var nomeServico_1 = this_1.entrada.receberTexto('Informe o Nome do Serviço:  ');
                    this_1.servicoSel = this_1.empresa.getServicos.find(function (servico) { return servico.nome === nomeServico_1; });
                    console.log((_b = this_1.servicoSel) === null || _b === void 0 ? void 0 : _b.nome);
                    (_c = this_1.clienteSel) === null || _c === void 0 ? void 0 : _c.addServicos(this_1.servicoSel);
                    break;
                case 0:
                    execucao = false;
                    console.log("Obrigado!");
                    break;
                default:
                    console.log("Digite Uma Op\u00E7\u00E3o V\u00E1lida!");
            }
        };
        var this_1 = this;
        while (execucao) {
            _loop_1();
        }
        console.log("\nInserido com Sucesso");
    };
    return ConsumoCliente;
}(cadastro_1.default));
exports.default = ConsumoCliente;
