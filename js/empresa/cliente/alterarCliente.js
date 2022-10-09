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
var telefone_1 = __importDefault(require("../../model/telefone"));
var alterar_1 = __importDefault(require("../alterar"));
var AlterarCliente = /** @class */ (function (_super) {
    __extends(AlterarCliente, _super);
    function AlterarCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AlterarCliente.prototype.alterar = function () {
        console.log('\nAlterar cliente:');
        var nome = this.entrada.receberTexto("Digite o nome do cliente: ");
        var index = this.clientes.findIndex(function (cli) { return cli.nome == nome; });
        var exe = true;
        while (exe) {
            console.log("1 - Nome");
            console.log("2 - Nome Social");
            console.log("3 - Telefone");
            console.log("0 - Sair.");
            var opcao = this.entrada.receberNumero('Digite uma das Opções Para Editar: ');
            switch (opcao) {
                case 1:
                    var nome_1 = this.entrada.receberTexto('Digite o Novo Nome: ');
                    this.clientes[index].nome = nome_1;
                    break;
                case 2:
                    var nomeSocial = this.entrada.receberTexto("Digite o Novo Nome Social: ");
                    this.clientes[index].nomeSocial = nomeSocial;
                    break;
                case 3:
                    var ddd = this.entrada.receberTexto("Digite o Novo DDD: ");
                    var telefone = this.entrada.receberTexto("Digite o Novo N\u00FAmero: ");
                    var tel = new telefone_1.default(ddd, telefone);
                    this.clientes[index].addTelefones(tel);
                    break;
                case 0:
                    exe = false;
                    console.log('Saindo.');
                    break;
                default:
                    console.log('Digite uma Opção Válida!.');
            }
        }
    };
    return AlterarCliente;
}(alterar_1.default));
exports.default = AlterarCliente;
