import Entrada from "../../io/entrada";
import Cliente from "../../model/cliente";
import Deletar from "../deletar";


export default class DeletarCliente extends Deletar {
    private clientes: Array<Cliente>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public deletar(): void {
        console.log("\nDeletar cliente:");

        let nome = this.entrada.receberTexto(`Cliente que deseja deletar: `)
        let nomeDel = this.clientes.find(cli => nome == cli.nome)
        if (nomeDel != undefined) {
            let index = this.clientes.indexOf(nomeDel)
            this.clientes.splice(index, 1);
            console.log("\nCliente deletado!");

        }
        else
            console.log("\nCliente não encontrado!");

    }

}