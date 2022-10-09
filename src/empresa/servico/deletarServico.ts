import Entrada from "../../io/entrada";
import Servico from "../../model/servico";
import Deletar from "../deletar";


export default class DeletarServico extends Deletar {
    private servico: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super();
        this.servico = servico
        this.entrada = new Entrada

    }

    public deletar(): void {
        console.log("\nDeletar serviços:");

        let nome = this.entrada.receberTexto("Nome do serviço: ");
        let servDel = this.servico.find(serv => nome == serv.nome);
        if (servDel != undefined) {
            let index = this.servico.indexOf(servDel);
            this.servico.splice(index, 1);
            console.log("\nServiço deletado!");

        }
        else
            console.log("\nServiço não enconrado.");

    }
}