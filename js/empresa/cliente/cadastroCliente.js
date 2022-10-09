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
var cliente_1 = __importDefault(require("../../model/cliente"));
var cpf_1 = __importDefault(require("../../model/cpf"));
var rg_1 = __importDefault(require("../../model/rg"));
var telefone_1 = __importDefault(require("../../model/telefone"));
var cadastro_1 = __importDefault(require("../cadastro"));
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        console.log("\nVamos cadastrar os cliente ;)");
        var nome = this.entrada.receberTexto("Nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Nome social do cliente: ");
        var genero = this.entrada.receberTexto("Qual genero (F-Feminino) (M-Masculino): ");
        var valor = this.entrada.receberTexto("N\u00FAmero do CPF: ");
        var data = this.entrada.receberTexto("Data da emiss\u00E3o do CPF no formato (dd/mm/aa): ");
        var valorRg = this.entrada.receberTexto("N\u00FAmero do RG: ");
        var dataRg = this.entrada.receberTexto("Data emiss\u00E3o RG:");
        var dddTel = this.entrada.receberTexto("DDD telefone: ");
        var numeroTel = this.entrada.receberTexto("Numero telefone: ");
        var partesData = data.split('/');
        var ano = new String(partesData[2].valueOf()).valueOf();
        var mes = new String(partesData[1].valueOf()).valueOf();
        var dia = new String(partesData[0].valueOf()).valueOf();
        var dataEmissao = (dia + '/' + mes + '/' + ano);
        partesData = dataRg.split("/");
        var anoRg = new String(partesData[2].valueOf()).valueOf();
        var mesRg = new String(partesData[1].valueOf()).valueOf();
        var diaRg = new String(partesData[0].valueOf()).valueOf();
        var dataEmissaoRg = ("".concat(diaRg, "/").concat(mesRg, "/").concat(anoRg));
        var tel = new telefone_1.default(dddTel, numeroTel);
        var cpf = new cpf_1.default(valor, dataEmissao);
        var rg = new rg_1.default(valorRg, dataEmissaoRg);
        var cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        cliente.addRgs(rg);
        cliente.addTelefones(tel);
        this.clientes.push(cliente);
        console.log("\n Cadastro finalizado :)");
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
