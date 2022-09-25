import Produto from "../../model/produto";
import Listagem from "../listagem";

export default class ListagemProdutos extends Listagem {
    private prodCadastrado: Array<Produto>
    constructor(prodCadastrado: Array<Produto>) {
        super();
        this.prodCadastrado = prodCadastrado
    }

    listar(): void {
        console.log(`\nLista de todos os produtos:\n `);
        this.prodCadastrado.forEach(prod => {            
            console.log(`Nome: ${prod.nome} \nPreço R$: ${prod.preco} ID:${prod.getProdutoID}`  );
            console.log(`--------------------------------------`);
        });

        console.log(`\n`);


    }


}