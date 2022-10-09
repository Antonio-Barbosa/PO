
import AlterarCliente from "../empresa/cliente/alterarCliente";
import CadastroCliente from "../empresa/cliente/cadastroCliente";
import DeletarCliente from "../empresa/cliente/deletarCliente";
import ListagemClientes from "../empresa/cliente/listagemClientes";
import ConsumoCliente from "../empresa/consumo/consumoCliente";
import Listar5MaisConsumo from "../empresa/consumo/listar5MaisConsumo";
import ListarConsumoGen from "../empresa/consumo/listarConsumoGen";
import ListaMaiorConsumo from "../empresa/consumo/listarMaiorConsumo";
import ListaMenorConsumo from "../empresa/consumo/listarMenorConsumo";
import ListagemServicoCliente from "../empresa/consumo/listarServicoCliente";
import ListarServMais from "../empresa/consumo/listarServMais";
import ProdMaisConsumido from "../empresa/consumo/prodMaisConsumido";
import ListagemGenero from "../empresa/listarGenero";
import AlterarProduto from "../empresa/produto/altearProduto";
import CadastroProdutos from "../empresa/produto/cadastroProduto";
import ListagemProdutos from "../empresa/produto/listagemProdutos";
import AlterarServico from "../empresa/servico/alterarServico";
import CadastroServico from "../empresa/servico/cadastroServico";
import DeletarServico from "../empresa/servico/deletarServico";
import ListarServicos from "../empresa/servico/listarServico";
import Entrada from "../io/entrada";
import Cliente from "../model/cliente";
import CPF from "../model/cpf";
import Empresa from "../model/empresa";
import Produto from "../model/produto";
import Servico from "../model/servico";


let empresa = new Empresa();
let execucao = true;

let cliente = new Cliente("Marcelo", "mar", new CPF("0", "13/04/1998"), "M")
let cliente1 = new Cliente("Bruna", "brubs", new CPF("1", "13/04/1998"), "F")
let cliente2 = new Cliente("Emerton", "ton", new CPF("2", "13/04/1998"), "M")
let cliente3 = new Cliente("Raquel", "quel", new CPF("3", "13/04/1998"), "F")
let cliente4 = new Cliente("Gabriel", "gab", new CPF("4", "13/04/1998"), "M")
let cliente5 = new Cliente("Dionisio", "nisio", new CPF("5", "13/04/1998"), "M")
let cliente6 = new Cliente("Carla", "car", new CPF("6", "13/04/1998"), "F")
let cliente7 = new Cliente("Leticia", "ticia", new CPF("7", "13/04/1998"), "F")
let cliente8 = new Cliente("Andre", "dre", new CPF("8", "13/04/1998"), "M")
let cliente9 = new Cliente("Rodrigo", "drigo", new CPF("9", "13/04/1998"), "M")

let servico = new Servico("Corte", 20, 1)
let servico1 = new Servico("Unha", 15, 2)
let servico2 = new Servico("Chapinha", 18, 3)
let servico3 = new Servico("Progressiva", 200, 4)
let servico4 = new Servico("Pintar", 50, 5)

let produto = new Produto("Gel", 15, 1)
let produto1 = new Produto("Pomada", 20, 2)
let produto2 = new Produto("Condicionador", 25, 3)
let produto3 = new Produto("Creme", 30, 4)
let produto4 = new Produto("Esmalte", 5, 5)

cliente.addProduto(produto)
cliente.addProduto(produto)
cliente.addProduto(produto2)

cliente1.addProduto(produto3)
cliente1.addProduto(produto4)

cliente.addServicos(servico)
cliente.addServicos(servico)
cliente.addServicos(servico2)

cliente4.addProduto(produto4)
cliente4.addProduto(produto2)

empresa.getCliente.push(cliente)
empresa.getCliente.push(cliente1)
empresa.getCliente.push(cliente2)
empresa.getCliente.push(cliente3)
empresa.getCliente.push(cliente4)
empresa.getCliente.push(cliente5)
empresa.getCliente.push(cliente6)
empresa.getCliente.push(cliente7)
empresa.getCliente.push(cliente8)
empresa.getCliente.push(cliente9)

empresa.getServicos.push(servico)
empresa.getServicos.push(servico1)
empresa.getServicos.push(servico2)
empresa.getServicos.push(servico3)
empresa.getServicos.push(servico4)

empresa.getProdutos.push(produto)
empresa.getProdutos.push(produto1)
empresa.getProdutos.push(produto2)
empresa.getProdutos.push(produto3)
empresa.getProdutos.push(produto4)

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - cadastrar produtos`);
    console.log(`4 - Listar todos os Produtos:`);
    console.log(`5 - cadastrar serviços:`);
    console.log(`6 - Listar todos os serviços:`);
    console.log(`7 - Adicionar Serviços/Produtos: `);
    console.log(`8 - Listar Serviços do Cliente: `);
    console.log(`9 - Excluir Cliente: `);
    console.log(`10 - Excluir Serviço: `);
    console.log(`11 - Editar Dados do Cliente: `);
    console.log(`12 - Editar Serviços: `);
    console.log(`13 - Editar Produtos: `);
    console.log(`14 - Listar Genero: `);
    console.log(`15 - Listar 5 mais em valor: `);
    console.log(`16 - Listar consumo por gênero: `);
    console.log(`17 - Listar 10 mais em quantidade: `);
    console.log(`18 - Listar 10 menos em quantidade: `);
    console.log(`19 - Listar produto mais consumido: `);
    console.log(`20 - Listar serviço mais consumido: `);


    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getCliente)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getCliente)
            listagem.listar()
            break;
        case 3:
            let Produto = new CadastroProdutos(empresa.getProdutos)
            Produto.cadastrar()
            break;
        case 4:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 5:
            let servico = new CadastroServico(empresa.getServicos)
            servico.cadastrar()
            break;
        case 6:
            let listagemServico = new ListarServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 7:
            let consumoCliente = new ConsumoCliente(empresa)
            consumoCliente.cadastrar();
            break;
        case 8:
            let listarServicoCliente = new ListagemServicoCliente(empresa.getCliente)
            listarServicoCliente.listar();
            break;
        case 9:
            let deletaCliente = new DeletarCliente(empresa.getCliente)
            deletaCliente.deletar();
            break;
        case 10:
            let deletaServico = new DeletarServico(empresa.getServicos)
            deletaServico.deletar();
            break;
        case 11:
            let editarCliente = new AlterarCliente(empresa.getCliente)
            editarCliente.alterar();
            break;
        case 12:
            let editarServico = new AlterarServico(empresa.getServicos)
            editarServico.alterar();
            break;
        case 13:
            let editaProduto = new AlterarProduto(empresa.getProdutos)
            editaProduto.alterar();
            break;
        case 14:
            let listarGenero = new ListagemGenero(empresa.getCliente)
            listarGenero.listar();
            break;
        case 15:
            let listar5Mais = new Listar5MaisConsumo(empresa.getCliente)
            listar5Mais.listar();
            break;
        case 16:
            let listarConsumoGen = new ListarConsumoGen(empresa.getCliente)
            listarConsumoGen.listar();
            break;
        case 17:
            let listar10Mais = new ListaMaiorConsumo(empresa.getCliente)
            listar10Mais.listar();
            break;
        case 18:
            let listar10Menos = new ListaMenorConsumo(empresa.getCliente)
            listar10Menos.listar();
            break;
        case 19:
            let listarProdMais = new ProdMaisConsumido(empresa.getCliente)
            listarProdMais.listar();
            break;
        case 20:
            let listarServMais = new ListarServMais(empresa.getCliente)
            listarServMais.listar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}



