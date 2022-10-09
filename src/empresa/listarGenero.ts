import Cliente from "../model/cliente";
import Listagem from "./listagem";


export default class ListagemGenero extends Listagem{
    private clientes: Array<Cliente>
    constructor(cliente: Array<Cliente>){
        super()
        this.clientes = cliente
    } 
    public listar(): void {
        let feminino: Cliente[] = [];
        let masculino: Cliente[] = [];
       

        this.clientes.forEach(clientes => {
            if(clientes.genero === "M"){
                masculino.push(clientes)
            }
            if(clientes.genero === "F"){
                feminino.push(clientes)
            }
        })

    console.log("Listagem de Clientes por Gênero");
    console.log('      ');
    console.log('Clientes do Gênero Feminino:');
    console.log('      ');

        feminino.forEach(fem => {
            console.log(`Nome: ` + fem.nome);
            console.log(`Nome social: ` + fem.nomeSocial);
            console.log(`CPF: ` + fem.getCpf.getValor);
            console.log(`------------------`);
            console.log('      ');
          });

    console.log('Clientes do Gênero Masculino:');
    console.log('      ');

        masculino.forEach(masc => {
            console.log(`Nome: ` + masc.nome);
            console.log(`Nome social: ` + masc.nomeSocial);
            console.log(`CPF: ` + masc.getCpf.getValor);
            console.log(`-------------------`);
            console.log('      ');
          });
        
    }
}