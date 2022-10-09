
import Cliente from "../../model/cliente";
import Listagem from "../listagem";

export default class ProdMaisConsumido extends Listagem{
    private clientes: Array<Cliente>

    constructor( clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let cliProd: any = [];

        // Map traz quantidade produtos mais consumidos
        this.clientes.map( cli =>{
            cli.getProdutosConsumidos.forEach(prod => {
                let nome = prod.getNome
                let qtd = cliProd[prod.getNome] = ( cliProd[prod.getNome] || 0 ) + 1
                cliProd.push({
                    nome: nome,
                    quantidade: qtd
                })
            });
        })
        let ordenado = cliProd.sort( (a: { quantidade: number; }, b: { quantidade: number; })  => {
            return b.quantidade - a.quantidade }).slice(0, 1)

            console.log(`\nProduto mais consumido`);

            console.log("-------------------------------------------------------")

            ordenado.forEach((consumidos: { nome: string, quantidade: string}) => {
            console.log(`Nome: ${consumidos.nome}`);
            console.log(`Quantidade consumida: ${consumidos.quantidade}`);
            console.log();
        })
    }
}