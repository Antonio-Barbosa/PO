import Entrada from "../../io/entrada";
import Cliente from "../../model/cliente";
import Produto from "../../model/produto";
import Servico from "../../model/servico";
import Listagem from "../listagem";

;

export default class ListarServicoCliente extends Listagem{
    public clientes: Array<Cliente>;
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    public listar(): void {
        const nome = this.entrada.receberTexto('Informe o nome do cliente: ');
        let cliente = this.clientes.find((cli:Cliente)=> cli.nome === nome);
        cliente?.getServicosConsumidos.forEach((servico: Servico)=>{
            console.log(`Serviço: ${servico.nome} Preço: ${servico.preco}`);            
        })
        cliente?.getProdutosConsumidos.forEach((produto: Produto) =>{
            console.log(`Produto: ${produto.nome} Preço: ${produto.preco}`);
        })
    }
}