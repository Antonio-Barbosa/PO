import Entrada from "../../io/entrada";
import Cliente from "../../model/cliente";
import CPF from "../../model/cpf";
import RG from "../../model/rg";
import Telefone from "../../model/telefone";
import Cadastro from "../cadastro";


export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        console.log(`\nVamos cadastrar os cliente ;)`);
        let nome = this.entrada.receberTexto(`Nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Nome social do cliente: `);
        let genero = this.entrada.receberTexto(`Qual genero (F-Feminino) (M-Masculino): `)
        let valor = this.entrada.receberTexto(`Número do CPF: `);
        let data = this.entrada.receberTexto(`Data da emissão do CPF no formato (dd/mm/aa): `);
        let valorRg = this.entrada.receberTexto(`Número do RG: `);
        let dataRg = this.entrada.receberTexto(`Data emissão RG:`);
        let dddTel = this.entrada.receberTexto(`DDD telefone: `);
        let numeroTel = this.entrada.receberTexto(`Numero telefone: `);

        let partesData = data.split('/');
        let ano = new String(partesData[2].valueOf()).valueOf();
        let mes = new String(partesData[1].valueOf()).valueOf();
        let dia = new String(partesData[0].valueOf()).valueOf();
        let dataEmissao = (dia + '/' + mes + '/' + ano);

        partesData = dataRg.split("/");
        let anoRg = new String(partesData[2].valueOf()).valueOf();
        let mesRg = new String(partesData[1].valueOf()).valueOf();
        let diaRg = new String(partesData[0].valueOf()).valueOf();
        let dataEmissaoRg = (`${diaRg}/${mesRg}/${anoRg}`);

        let tel = new Telefone(dddTel, numeroTel);

        let cpf = new CPF(valor, dataEmissao);

        let rg = new RG(valorRg, dataEmissaoRg);

        let cliente = new Cliente(nome, nomeSocial, cpf, genero);

        cliente.addRgs(rg)
        cliente.addTelefones(tel)
        this.clientes.push(cliente);
        console.log(`\n Cadastro finalizado :)`);
    }

}