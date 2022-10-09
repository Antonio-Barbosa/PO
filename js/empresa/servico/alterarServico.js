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
var AlterarServico = /** @class */ (function (_super) {
    __extends(AlterarServico, _super);
    function AlterarServico(servico) {
        var _this = _super.call(this) || this;
        _this.servico = servico;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AlterarServico.prototype.alterar = function () {
        console.log("\nAlterar servi\u00E7os:");
        var nomeDel = this.entrada.receberTexto("Servi\u00E7o a ser alterado: ");
        var index = this.servico.findIndex(function (serv) { return serv.nome == nomeDel; });
        var exe = true;
        while (exe) {
            console.log("1 - Nome do Servi\u00E7o.");
            console.log("2 - Pre\u00E7o do Servi\u00E7o.");
            console.log("0 - Sair.");
            var opcao = this.entrada.receberNumero("Digite uma das Op\u00E7\u00F5es Para Atualizar o Servi\u00E7o: ");
            switch (opcao) {
                case 1:
                    var nome = this.entrada.receberTexto("Digite o Novo Nome do Servi\u00E7o: ");
                    this.servico[index].nome = nome;
                    break;
                case 2:
                    var preco = this.entrada.receberNumero("Digite o Novo Pre\u00E7o do Servi\u00E7o: ");
                    this.servico[index].preco = preco;
                    break;
                case 0:
                    exe = false;
                    console.log("Obrigado!.");
                    break;
                default:
                    console.log("Digite Uma Op\u00E7\u00E3o V\u00E1lida!.");
            }
        }
    };
    return AlterarServico;
}(alterar_1.default));
exports.default = AlterarServico;
