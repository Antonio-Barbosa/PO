import Entrada from "../../io/entrada";
import Produto from "../../model/produto";
import Deletar from "../deletar";


export default class DeletarProduto extends Deletar {
    private produto: Array<Produto>
    private entrada: Entrada

    constructor(produto: Array<Produto>) {
        super();
        this.produto = produto
        this.entrada = new Entrada()
    }

    public deletar(): void {
        console.log("\nDeletar produtos:\n");
        const idProduto = this.entrada.receberNumero(`Digite o ID do Produto: `);
        let index = this.produto.findIndex(prod => prod.getProdutoID == idProduto);
        if (index != undefined) {

            this.produto.splice(index,1);
            console.log("Produto deletado!");

        } else {
            console.log("Produto não encontrado!");

        }
    }
}