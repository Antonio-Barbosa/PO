import Servico from "../../model/servico";
import Listagem from "../listagem";



export default class ListarServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos
    }
    listar(): void {
        console.log(`\nLista de todos os serviços:`);
        this.servicos.forEach(serv => {
            console.log(`Nome: ${serv.nome}  \nPreço R$: ${serv.preco}`);
            console.log(`--------------------------------------`);
        })
        console.log("\n");


    }

}