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
var deletar_1 = __importDefault(require("../deletar"));
var DeletarProduto = /** @class */ (function (_super) {
    __extends(DeletarProduto, _super);
    function DeletarProduto(produto) {
        var _this = _super.call(this) || this;
        _this.produto = produto;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    DeletarProduto.prototype.deletar = function () {
        console.log("\nDeletar produtos:\n");
        var idProduto = this.entrada.receberNumero("Digite o ID do Produto: ");
        var index = this.produto.findIndex(function (prod) { return prod.getProdutoID == idProduto; });
        if (index != undefined) {
            this.produto.splice(index, 1);
            console.log("Produto deletado!");
        }
        else {
            console.log("Produto não encontrado!");
        }
    };
    return DeletarProduto;
}(deletar_1.default));
exports.default = DeletarProduto;
