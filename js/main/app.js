"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var alterarCliente_1 = __importDefault(require("../empresa/cliente/alterarCliente"));
var cadastroCliente_1 = __importDefault(require("../empresa/cliente/cadastroCliente"));
var deletarCliente_1 = __importDefault(require("../empresa/cliente/deletarCliente"));
var listagemClientes_1 = __importDefault(require("../empresa/cliente/listagemClientes"));
var consumoCliente_1 = __importDefault(require("../empresa/consumo/consumoCliente"));
var listar5MaisConsumo_1 = __importDefault(require("../empresa/consumo/listar5MaisConsumo"));
var listarConsumoGen_1 = __importDefault(require("../empresa/consumo/listarConsumoGen"));
var listarMaiorConsumo_1 = __importDefault(require("../empresa/consumo/listarMaiorConsumo"));
var listarMenorConsumo_1 = __importDefault(require("../empresa/consumo/listarMenorConsumo"));
var listarServicoCliente_1 = __importDefault(require("../empresa/consumo/listarServicoCliente"));
var listarServMais_1 = __importDefault(require("../empresa/consumo/listarServMais"));
var prodMaisConsumido_1 = __importDefault(require("../empresa/consumo/prodMaisConsumido"));
var listarGenero_1 = __importDefault(require("../empresa/listarGenero"));
var altearProduto_1 = __importDefault(require("../empresa/produto/altearProduto"));
var cadastroProduto_1 = __importDefault(require("../empresa/produto/cadastroProduto"));
var listagemProdutos_1 = __importDefault(require("../empresa/produto/listagemProdutos"));
var alterarServico_1 = __importDefault(require("../empresa/servico/alterarServico"));
var cadastroServico_1 = __importDefault(require("../empresa/servico/cadastroServico"));
var deletarServico_1 = __importDefault(require("../empresa/servico/deletarServico"));
var listarServico_1 = __importDefault(require("../empresa/servico/listarServico"));
var entrada_1 = __importDefault(require("../io/entrada"));
var cliente_1 = __importDefault(require("../model/cliente"));
var cpf_1 = __importDefault(require("../model/cpf"));
var empresa_1 = __importDefault(require("../model/empresa"));
var produto_1 = __importDefault(require("../model/produto"));
var servico_1 = __importDefault(require("../model/servico"));
var empresa = new empresa_1.default();
var execucao = true;
var cliente = new cliente_1.default("Marcelo", "mar", new cpf_1.default("0", "13/04/1998"), "M");
var cliente1 = new cliente_1.default("Bruna", "brubs", new cpf_1.default("1", "13/04/1998"), "F");
var cliente2 = new cliente_1.default("Emerton", "ton", new cpf_1.default("2", "13/04/1998"), "M");
var cliente3 = new cliente_1.default("Raquel", "quel", new cpf_1.default("3", "13/04/1998"), "F");
var cliente4 = new cliente_1.default("Gabriel", "gab", new cpf_1.default("4", "13/04/1998"), "M");
var cliente5 = new cliente_1.default("Dionisio", "nisio", new cpf_1.default("5", "13/04/1998"), "M");
var cliente6 = new cliente_1.default("Carla", "car", new cpf_1.default("6", "13/04/1998"), "F");
var cliente7 = new cliente_1.default("Leticia", "ticia", new cpf_1.default("7", "13/04/1998"), "F");
var cliente8 = new cliente_1.default("Andre", "dre", new cpf_1.default("8", "13/04/1998"), "M");
var cliente9 = new cliente_1.default("Rodrigo", "drigo", new cpf_1.default("9", "13/04/1998"), "M");
var servico = new servico_1.default("Corte", 20, 1);
var servico1 = new servico_1.default("Unha", 15, 2);
var servico2 = new servico_1.default("Chapinha", 18, 3);
var servico3 = new servico_1.default("Progressiva", 200, 4);
var servico4 = new servico_1.default("Pintar", 50, 5);
var produto = new produto_1.default("Gel", 15, 1);
var produto1 = new produto_1.default("Pomada", 20, 2);
var produto2 = new produto_1.default("Condicionador", 25, 3);
var produto3 = new produto_1.default("Creme", 30, 4);
var produto4 = new produto_1.default("Esmalte", 5, 5);
cliente.addProduto(produto);
cliente.addProduto(produto);
cliente.addProduto(produto2);
cliente1.addProduto(produto3);
cliente1.addProduto(produto4);
cliente.addServicos(servico);
cliente.addServicos(servico);
cliente.addServicos(servico2);
cliente4.addProduto(produto4);
cliente4.addProduto(produto2);
empresa.getCliente.push(cliente);
empresa.getCliente.push(cliente1);
empresa.getCliente.push(cliente2);
empresa.getCliente.push(cliente3);
empresa.getCliente.push(cliente4);
empresa.getCliente.push(cliente5);
empresa.getCliente.push(cliente6);
empresa.getCliente.push(cliente7);
empresa.getCliente.push(cliente8);
empresa.getCliente.push(cliente9);
empresa.getServicos.push(servico);
empresa.getServicos.push(servico1);
empresa.getServicos.push(servico2);
empresa.getServicos.push(servico3);
empresa.getServicos.push(servico4);
empresa.getProdutos.push(produto);
empresa.getProdutos.push(produto1);
empresa.getProdutos.push(produto2);
empresa.getProdutos.push(produto3);
empresa.getProdutos.push(produto4);
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Listar todos os clientes");
    console.log("3 - cadastrar produtos");
    console.log("4 - Listar todos os Produtos:");
    console.log("5 - cadastrar servi\u00E7os:");
    console.log("6 - Listar todos os servi\u00E7os:");
    console.log("7 - Adicionar Servi\u00E7os/Produtos: ");
    console.log("8 - Listar Servi\u00E7os do Cliente: ");
    console.log("9 - Excluir Cliente: ");
    console.log("10 - Excluir Servi\u00E7o: ");
    console.log("11 - Editar Dados do Cliente: ");
    console.log("12 - Editar Servi\u00E7os: ");
    console.log("13 - Editar Produtos: ");
    console.log("14 - Listar Genero: ");
    console.log("15 - Listar 5 mais em valor: ");
    console.log("16 - Listar consumo por g\u00EAnero: ");
    console.log("17 - Listar 10 mais em quantidade: ");
    console.log("18 - Listar 10 menos em quantidade: ");
    console.log("19 - Listar produto mais consumido: ");
    console.log("20 - Listar servi\u00E7o mais consumido: ");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getCliente);
            cadastro.cadastrar();
            break;
        case 2:
            var listagem = new listagemClientes_1.default(empresa.getCliente);
            listagem.listar();
            break;
        case 3:
            var Produto_1 = new cadastroProduto_1.default(empresa.getProdutos);
            Produto_1.cadastrar();
            break;
        case 4:
            var listagemProdutos = new listagemProdutos_1.default(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        case 5:
            var servico_2 = new cadastroServico_1.default(empresa.getServicos);
            servico_2.cadastrar();
            break;
        case 6:
            var listagemServico = new listarServico_1.default(empresa.getServicos);
            listagemServico.listar();
            break;
        case 7:
            var consumoCliente = new consumoCliente_1.default(empresa);
            consumoCliente.cadastrar();
            break;
        case 8:
            var listarServicoCliente = new listarServicoCliente_1.default(empresa.getCliente);
            listarServicoCliente.listar();
            break;
        case 9:
            var deletaCliente = new deletarCliente_1.default(empresa.getCliente);
            deletaCliente.deletar();
            break;
        case 10:
            var deletaServico = new deletarServico_1.default(empresa.getServicos);
            deletaServico.deletar();
            break;
        case 11:
            var editarCliente = new alterarCliente_1.default(empresa.getCliente);
            editarCliente.alterar();
            break;
        case 12:
            var editarServico = new alterarServico_1.default(empresa.getServicos);
            editarServico.alterar();
            break;
        case 13:
            var editaProduto = new altearProduto_1.default(empresa.getProdutos);
            editaProduto.alterar();
            break;
        case 14:
            var listarGenero = new listarGenero_1.default(empresa.getCliente);
            listarGenero.listar();
            break;
        case 15:
            var listar5Mais = new listar5MaisConsumo_1.default(empresa.getCliente);
            listar5Mais.listar();
            break;
        case 16:
            var listarConsumoGen = new listarConsumoGen_1.default(empresa.getCliente);
            listarConsumoGen.listar();
            break;
        case 17:
            var listar10Mais = new listarMaiorConsumo_1.default(empresa.getCliente);
            listar10Mais.listar();
            break;
        case 18:
            var listar10Menos = new listarMenorConsumo_1.default(empresa.getCliente);
            listar10Menos.listar();
            break;
        case 19:
            var listarProdMais = new prodMaisConsumido_1.default(empresa.getCliente);
            listarProdMais.listar();
            break;
        case 20:
            var listarServMais = new listarServMais_1.default(empresa.getCliente);
            listarServMais.listar();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
