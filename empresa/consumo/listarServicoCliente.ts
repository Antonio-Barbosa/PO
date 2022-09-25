import Entrada from "../../io/entrada";
import Cliente from "../../model/cliente";
import Servico from "../../model/servico";
import Listagem from "../listagem";

;

export default class ListagemServicoCliente extends Listagem{
    public clientes: Array<Cliente>;
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    public listar(): void {
        const nome = this.entrada.receberTexto('Informe CPF do Cliente: ');
        let cliente = this.clientes.find((cli:Cliente)=> cli.nome === nome);
        cliente?.getServicosConsumidos.forEach((servico: Servico)=>{
            console.log(servico.nome);            
        })
    }
}