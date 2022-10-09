import Cliente from "../../model/cliente";
import Listagem from "../listagem";




export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Genero: ${cliente.genero}`);
            console.log(`CPF: ${cliente.getCpf.getValor} Emitido em: ${cliente.getCpf.getDataEmissao}`);
            cliente.getRgs.forEach(rg => {
                console.log(`RG: ${rg.getValor} Emitido em: ${rg.getDataEmissao}`);
            });
            cliente.getTelefones.forEach(tel => {
                console.log(`DDD: (${tel.getDdd}) - ${tel.getNumero} `);
            });
            console.log(`Data do cadastro: ` + cliente.getDataCadastro);
            console.log(`--------------------------------------`);            
        });
        
        console.log(`\n`);



    }



}