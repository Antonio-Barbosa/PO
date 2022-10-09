import Entrada from "../../io/entrada";
import Servico from "../../model/servico";
import Alterar from "../alterar";

export default class AlterarServico extends Alterar {
    private servico: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super();
        this.servico = servico
        this.entrada = new Entrada()
    }
    alterar(): void { 
        console.log(`\nAlterar serviços:`);
               
        let nomeDel = this.entrada.receberTexto(`Serviço a ser alterado: `)
        let index = this.servico.findIndex(serv => serv.nome == nomeDel)
        let exe = true
        
            while (exe) {                
                console.log(`1 - Nome do Serviço.`);
                console.log(`2 - Preço do Serviço.`);                
                console.log(`0 - Sair.`);
                let opcao = this.entrada.receberNumero(`Digite uma das Opções Para Atualizar o Serviço: `);
                switch (opcao) {
                    case 1:
                        let nome = this.entrada.receberTexto(`Digite o Novo Nome do Serviço: `);
                        this.servico[index].nome = nome
                        break;
                    case 2:
                        let preco = this.entrada.receberNumero(`Digite o Novo Preço do Serviço: `);
                        this.servico[index].preco = preco
                        break;                    
                    case 0:
                        exe = false
                        console.log(`Obrigado!.`);
                        break;
                    default:
                        console.log(`Digite Uma Opção Válida!.`);
                }
            }
        }

    }

