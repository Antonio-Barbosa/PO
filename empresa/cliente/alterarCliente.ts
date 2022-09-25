
import Entrada from "../../io/entrada";
import Cliente from "../../model/cliente";
import Telefone from "../../model/telefone";
import Alterar from "../alterar";

export default class AlterarCliente extends Alterar {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes
        this.entrada = new Entrada();
    }
    alterar(): void {
        console.log('\nAlterar cliente:');
        let nome = this.entrada.receberTexto(`Digite o nome do cliente: `)
        let index = this.clientes.findIndex(cli => cli.nome == nome);
        let exe = true        
            while (exe) {                
                console.log(`1 - Nome`);
                console.log(`2 - Nome Social`);                
                console.log(`3 - Telefone`);                                  
                console.log(`0 - Sair.`);
                let opcao = this.entrada.receberNumero('Digite uma das Opções Para Editar: ');
                switch (opcao) {
                    case 1:
                        let nome = this.entrada.receberTexto('Digite o Novo Nome: ');
                        this.clientes[index].nome = nome
                        break;
                    case 2:
                        let nomeSocial = this.entrada.receberTexto(`Digite o Novo Nome Social: `);
                        this.clientes[index].nomeSocial = nomeSocial
                        break;
                    case 3:
                        let ddd = this.entrada.receberTexto(`Digite o Novo DDD: `);
                        let telefone = this.entrada.receberTexto(`Digite o Novo Número: `);
                        let tel = new Telefone(ddd, telefone)
                        this.clientes[index].addTelefones(tel);
                        break;
                    case 0:
                        exe = false
                        console.log('Saindo.');
                        break;
                    default:
                        console.log('Digite uma Opção Válida!.');
                }
            }
        

        }

    }
