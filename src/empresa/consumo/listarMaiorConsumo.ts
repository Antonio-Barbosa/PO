
import Cliente from "../../model/cliente";
import Listagem from "../listagem";

export default class ListaMaiorConsumo extends Listagem{
    private clientes: Array <Cliente>
    
    constructor(clientes: Array <Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let nome, cpf, consumoTotal, ordenacao
        let qtdConsumido: any  = [];


        this.clientes.forEach( cliente => {

            nome = cliente.nome;
            cpf = cliente.getCpf.getValor

            consumoTotal = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;


            qtdConsumido.push({
                nome: nome,
                cpf: cpf,
                quantidade: consumoTotal,

            });
        })

        ordenacao = qtdConsumido.sort((x, y) => {
            return y.quantidade - x.quantidade;
        })

        ordenacao = ordenacao.slice(0,10)

        console.log("Listagem dos 10 Clientes que MAIS consumiram produtos ou servicos em quantidade.");

        console.log(`\n--------------------------------------\n`);

        ordenacao.forEach( cliente => {
            console.log(`Nome do Cliente: ${cliente.nome}` );
            console.log(`CPF do Cliente: ${cliente.cpf}` );
            console.log(`Quantidade de produtos e servicos Consumido pelo Cliente: ${cliente.quantidade}` );

            console.log(`\n--------------------------------------\n`);
        })

    }
}