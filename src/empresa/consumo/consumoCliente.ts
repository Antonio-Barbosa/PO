import Entrada from "../../io/entrada";
import Cliente from "../../model/cliente";
import Empresa from "../../model/empresa";
import Servico from "../../model/servico";
import Cadastro from "../cadastro";

export default class ConsumoCliente extends Cadastro {
    private entrada: Entrada
    public clienteSel?: Cliente
    public empresa: Empresa
    public servicoSel?: Servico
    constructor(empresa: Empresa) {
        super()
        this.entrada = new Entrada()
        this.empresa = empresa

    }
    public cadastrar(): void {
        const nome = this.entrada.receberTexto('Informe o nome do Cliente: ')
        this.clienteSel = this.empresa.getCliente.find(cliente => cliente.nome === nome)        
        let execucao = true;
        while(execucao){
            console.log("----------------------");
            console.log(`Opeção de consumo.`);
            console.log(`1 - Produto`);
            console.log(`2 - Serviço`);
            console.log(`0 - Sair`);           
            let opcao = this.entrada.receberNumero('Insira a Opção:  ')
            switch(opcao){
                case 1:
                    let nomeProduto = this.entrada.receberTexto('Escreva o Nome do Produto: ');
                    let produto = this.empresa.getProdutos.find(prod =>prod.nome  === nomeProduto)
                    this.clienteSel?.addProduto(produto)
                    break;
                case 2:
                    const nomeServico = this.entrada.receberTexto('Informe o Nome do Serviço:  ')
                    this.servicoSel = this.empresa.getServicos.find(servico => servico.nome === nomeServico)
                    console.log(this.servicoSel?.nome);
                    this.clienteSel?.addServicos(this.servicoSel)
                    break;
                case 0:
                    execucao = false
                    console.log(`Obrigado!`)
                    break;
                default:
                    console.log(`Digite Uma Opção Válida!`);    
            }       
        }
        console.log(`\nInserido com Sucesso`);

    }

}