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
var ListarServicos = /** @class */ (function (_super) {
    __extends(ListarServicos, _super);
    function ListarServicos(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        return _this;
    }
    ListarServicos.prototype.listar = function () {
        console.log("\nLista de todos os servi\u00E7os:");
        this.servicos.forEach(function (serv) {
            console.log("Nome: ".concat(serv.nome, "  \nPre\u00E7o R$: ").concat(serv.preco));
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    return ListarServicos;
}(listagem_1.default));
exports.default = ListarServicos;
