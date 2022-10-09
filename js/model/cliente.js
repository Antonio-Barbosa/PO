"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, nomeSocial, cpf, genero) {
        this.nome = nome;
        this.genero = genero;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.dataCadastro = new Date();
        this.rgs = [];
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    Object.defineProperty(Cliente.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getRgs", {
        get: function () {
            return this.rgs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getDataCadastro", {
        get: function () {
            return this.dataCadastro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTelefones", {
        get: function () {
            return this.telefones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getProdutosConsumidos", {
        get: function () {
            return this.produtosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getServicosConsumidos", {
        get: function () {
            return this.servicosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setCpf", {
        set: function (cpf) {
            this.cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setRg", {
        set: function (rg) {
            this.rgs = rg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setDataCadastro", {
        set: function (data) {
            this.dataCadastro = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "setTelefone", {
        set: function (telefone) {
            this.telefones = telefone;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.addTelefones = function (telefone) {
        this.telefones.push(telefone);
    };
    Cliente.prototype.addRgs = function (rg) {
        this.rgs.push(rg);
    };
    Cliente.prototype.addServicos = function (servico) {
        if (!servico) {
            console.log("Serviço Não Encotrado!");
        }
        else {
            this.servicosConsumidos.push(servico);
            console.log('Serviço Adicionado!');
        }
    };
    Cliente.prototype.addProduto = function (produto) {
        if (!produto) {
            console.log("Produto Não Encontrado!");
        }
        else {
            this.produtosConsumidos.push(produto);
            console.log("Produto Adicionado!");
        }
    };
    return Cliente;
}());
exports.default = Cliente;
