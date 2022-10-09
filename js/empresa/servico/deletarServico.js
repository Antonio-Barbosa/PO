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
var DeletarServico = /** @class */ (function (_super) {
    __extends(DeletarServico, _super);
    function DeletarServico(servico) {
        var _this = _super.call(this) || this;
        _this.servico = servico;
        _this.entrada = new entrada_1.default;
        return _this;
    }
    DeletarServico.prototype.deletar = function () {
        console.log("\nDeletar serviços:");
        var nome = this.entrada.receberTexto("Nome do serviço: ");
        var servDel = this.servico.find(function (serv) { return nome == serv.nome; });
        if (servDel != undefined) {
            var index = this.servico.indexOf(servDel);
            this.servico.splice(index, 1);
            console.log("\nServiço deletado!");
        }
        else
            console.log("\nServiço não enconrado.");
    };
    return DeletarServico;
}(deletar_1.default));
exports.default = DeletarServico;
