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
var alterar_1 = __importDefault(require("../alterar"));
var AlterarProduto = /** @class */ (function (_super) {
    __extends(AlterarProduto, _super);
    function AlterarProduto(produto) {
        var _this = _super.call(this) || this;
        _this.produto = produto;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AlterarProduto.prototype.alterar = function () {
        console.log("\nAlterar produto:");
        var id = this.entrada.receberNumero("Digite o ID do produto: ");
        var index = this.produto.findIndex(function (prod) { return prod.getProdutoID == id; });
        var exe = true;
        while (exe) {
            console.log("1 - Nome do produto: ");
            console.log("2 - Pre\u00E7o do produto: ");
            console.log("0 - Finalizar");
            var opcao = this.entrada.receberNumero("Digite a op\u00E7\u00E3o desejada: ");
            switch (opcao) {
                case 1:
                    var nome = this.entrada.receberTexto("Digite o Novo Nome do Produto: ");
                    this.produto[index].nome = nome;
                    break;
                case 2:
                    var preco = this.entrada.receberNumero("Digite o Novo Pre\u00E7o do Produto: ");
                    this.produto[index].preco = preco;
                    break;
                case 0:
                    exe = false;
                    console.log("Obrigado!");
                    break;
                default:
                    console.log("Digite Uma Op\u00E7\u00E3o V\u00E1lida!");
            }
        }
    };
    return AlterarProduto;
}(alterar_1.default));
exports.default = AlterarProduto;
