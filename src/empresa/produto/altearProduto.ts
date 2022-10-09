import Entrada from "../../io/entrada";
import Produto from "../../model/produto";
import Alterar from "../alterar";

export default class AlterarProduto extends Alterar {
    private produto: Array<Produto>
    private entrada: Entrada
    constructor(produto: Array<Produto>) {
        super();
        this.produto = produto
        this.entrada = new Entrada();

    }
    alterar(): void {  
        console.log(`\nAlterar produto:`);
         
        let id = this.entrada.receberNumero(`Digite o ID do produto: `)
        let index = this.produto.findIndex(prod => prod.getProdutoID == id)
        let exe = true
            while (exe) {
                console.log(`1 - Nome do produto: `);
                console.log(`2 - Preço do produto: `);
                console.log(`0 - Finalizar`)
                let opcao = this.entrada.receberNumero(`Digite a opção desejada: `)
                switch (opcao) {
                    case 1:
                        let nome = this.entrada.receberTexto(`Digite o Novo Nome do Produto: `);
                        this.produto[index].nome = nome
                        break;
                    case 2:
                        let preco = this.entrada.receberNumero(`Digite o Novo Preço do Produto: `);
                        this.produto[index].preco = preco
                        break;
                    case 0:
                        exe = false
                        console.log(`Obrigado!`);
                        break;
                    default:
                        console.log(`Digite Uma Opção Válida!`);
                }
            }

        } 

    }

