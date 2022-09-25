import Cliente from "../model/cliente";
import Listagem from "./listagem";


export default class listagemGenero extends Listagem{
    private clientes: Cliente[]
    constructor(cliente: Cliente[]){
        super()
        this.clientes = cliente
    } 
    public listar(): void {
        let feminino: Cliente[] = [];
        let masculino: Cliente[] = [];
        let naoInformado: Cliente[] = [];

        this.clientes.forEach(clientes => {
            if(clientes.genero === "M"){
                masculino.push(clientes)
            }
            if(clientes.genero === "F"){
                feminino.push(clientes)
            }
            if(clientes.genero === "NI"){
                naoInformado.push(clientes)
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

    console.log('Clientes que Não informaram Gênero:');

        naoInformado.forEach(naoInf => {
            console.log(`Nome: ` + naoInf.nome);
            console.log(`Nome social: ` + naoInf.nomeSocial);
            console.log(`CPF: ` + naoInf.getCpf.getValor);
            console.log(`----------------`);
            console.log('      ');
          });

        
    }
}