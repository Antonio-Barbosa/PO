import Alterar from "../empresa/alterar";
import AlterarCliente from "../empresa/cliente/alterarCliente";
import CadastroCliente from "../empresa/cliente/cadastroCliente";
import DeletarCliente from "../empresa/cliente/deletarCliente";
import ListagemClientes from "../empresa/cliente/listagemClientes";
import ConsumoCliente from "../empresa/consumo/consumoCliente";
import ListagemServicoCliente from "../empresa/consumo/listarServicoCliente";
import AlterarProduto from "../empresa/produto/altearProduto";
import CadastroProdutos from "../empresa/produto/cadastroProduto";
import ListagemProdutos from "../empresa/produto/listagemProdutos";
import AlterarServico from "../empresa/servico/alterarServico";
import CadastroServico from "../empresa/servico/cadastroServico";
import DeletarServico from "../empresa/servico/deletarServico";
import ListarServicos from "../empresa/servico/listarServico";
import Entrada from "../io/entrada";
import Empresa from "../model/empresa";


let empresa = new Empresa();
let execucao = true;

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - cadastrar produtos`);
    console.log(`4 - Listar todos os Produtos:`);
    console.log(`5 - cadastrar serviços:`);
    console.log(`6 - Listar todos os serviços:`);
    console.log(`7 - Serviços Contratados: `);
    console.log(`8 - Listar Serviços do Cliente: `);
    console.log(`9 - Excluir Cliente: `);
    console.log(`10 - Excluir Serviço: `); 
    console.log(`11 - Editar Dados do Cliente: `);
    console.log(`12 - Editar Serviços: `);  
    console.log(`13 - Editar Produtos: `);   
              
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
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}

// while (execucao) {
//     console.log(`1 - Clientes: `);
//     console.log(`2 - Produtos: `);
//     console.log(`3 - Serviços: `);
//     console.log(`0 - Sair `);

//     let entrada = new Entrada();
//     let opcao = entrada.receberNumero(`\nEscolha uma opção: `);


//     switch (opcao) {

//         //Cliente
//         case 1:
//             let execucao2 = true
//             while (execucao2) {
//                 console.log(`1 - Cadastrar cliente`);
//                 console.log(`2 - Listar todos os clientes`);
//                 console.log(`3 - Deletar cliente`);
//                 console.log(`4 - Alterar cliente`);
//                 console.log("0 - Finalizar");
//                 let opcao2 = entrada.receberNumero(`\nEscolha uma opção: `);
//                 switch (opcao2) {
//                     case 1:
//                         let cadastro = new CadastroCliente(empresa.getCliente);
//                         cadastro.cadastrar();
//                         break;
//                     case 2:
//                         let listagem = new ListagemClientes(empresa.getCliente);
//                         listagem.listar();
//                         break;
//                     case 3:
//                         let deleterCliente = new DeletarCliente(empresa.getCliente);
//                         deleterCliente.deletar();
//                         break;
//                     case 4:
//                         let alterarCli = new AlterarCliente(empresa.getCliente)
//                         alterarCli.alterar();
//                         break;
//                     case 0:
//                         execucao2 = false
//                         console.log(`\nAté a próxima!`);
//                         break;
//                     default:
//                         console.log(`\nComando não entendido :(`);
//                 }
//             }
//         //Produto
//         case 2:
//             let execucao3 = true
//             while (execucao3) {
//                 console.log("1 - Cadastro de produto.");
//                 console.log(`2 - Listar todos os produtos`);
//                 console.log(`3 - Deletar produtos`);
//                 console.log(`4 - Alterar produto`);
//                 console.log(`0 - Sair `);
//                 let opcao3 = entrada.receberNumero(`\nEscolha uma opção: `);
//                 switch (opcao3) {
//                     case 1:
//                         let cadastroProduto = new CadastroProdutos(empresa.getProdutos);
//                         cadastroProduto.cadastrar();
//                         break;
//                     case 2:
//                         let listarProdutos = new ListagemProdutos(empresa.getProdutos);
//                         listarProdutos.listar();
//                         break;
//                     case 3:
//                         let deletarProd = new DeletarProduto(empresa.getProdutos);
//                         deletarProd.deletar();
//                         break;
//                     case 4:
//                         let alterarPoduto = new AlterarProduto(empresa.getProdutos);
//                         alterarPoduto.alterar()
//                         break;
//                     case 0:
//                         execucao3 = false
//                         console.log(`\nAté a próxima!`);
//                         break;

//                     default:
//                         console.log(`\nComando não entendido :(`);
//                 }
//             }

//         //Serviços
//         case 3:
//             let execucao4 = true
//             while (execucao4) {
//                 console.log(`1 - Cadastrar serviços`);
//                 console.log(`2 - Listar todos os serviços`);
//                 console.log(`3 - Deletar serviços`);
//                 console.log(`4 - Altear serviço`);
//                 console.log(`0 - Sair `);
//                 let opcao4 = entrada.receberNumero(`\nEscolha uma opção: `);
//                 switch (opcao4) {
//                     case 1:
//                         let cadastroServicos = new CadastroServico(empresa.getServicos);
//                         cadastroServicos.cadastrar();
//                         break;
//                     case 2:
//                         let listarServicos = new ListarServicos(empresa.getServicos);
//                         listarServicos.listar();
//                         break;
//                     case 3:
//                         let deletarServ = new DeletarServico(empresa.getServicos);
//                         deletarServ.deletar();
//                         break;
//                     case 4:
//                         let alterarServ = new AlterarServico(empresa.getServicos);
//                         alterarServ.alterar()
//                     case 0:
//                         execucao4 = false
//                         console.log(`\nAté a próxima!`);
//                         break;
//                     default:
//                         console.log(`\nComando não entendido :(`);
//                 }
//             }
//         case 0:
//             execucao = false
//             console.log(`Até a próxima!`);
//             break;

//         default:
//             console.log(`Comando não entendido :(`);

//     }

// }


