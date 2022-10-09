import Entrada from "../../io/entrada";
import Produto from "../../model/produto";
import Cadastro from "../cadastro";

;

export default class CadastroProdutos extends Cadastro {
    private produto: Array<Produto>
    private entrada: Entrada
    constructor(produto: Array<Produto>) {
        super();
        this.produto = produto
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        console.log(`\nVamos cadastrar os produtos ;)\n`);
        let nome = this.entrada.receberTexto(`Nome do produto: `);
        let preco = this.entrada.receberNumero(`Preço do produto: `);
        let id = this.entrada.receberNumero(`ID do produto: `);

        let prod = new Produto(nome, preco, id);
        this.produto.push(prod);
        console.log(`\n Cadastro finalizado :)`);



    }

}