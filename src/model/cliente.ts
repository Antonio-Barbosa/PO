import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    public genero: string
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string) {
        this.nome = nome
        this.genero = genero
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.dataCadastro = new Date();
        this.rgs = []
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []

    }

    public get getCpf() {
        return this.cpf
    }

    public get getRgs() {
        return this.rgs
    }
    public get getDataCadastro() {
        return this.dataCadastro
    }
    public get getTelefones() {
        return this.telefones
    }

    public get getProdutosConsumidos() {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos() {
        return this.servicosConsumidos

    }
    public set setCpf(cpf: CPF) {
        this.cpf = cpf;
    }

    public set setRg(rg: Array<RG>) {
        this.rgs = rg;
    }


    public set setDataCadastro(data: Date) {
        this.dataCadastro = data;
    }

    public set setTelefone(telefone: Array<Telefone>) {
        this.telefones = telefone
    }

    addTelefones(telefone: Telefone) {
        this.telefones.push(telefone);
    }
    addRgs(rg: RG) {
        this.rgs.push(rg);
    }

    public addServicos(servico?: Servico): void {
        if (!servico) {
            console.log("Serviço Não Encotrado!");

        }
        else {
            this.servicosConsumidos.push(servico)
            console.log('Serviço Adicionado!');

        }

    }

    public addProduto(produto?: Produto): void {
        if (!produto) {
            console.log("Produto Não Encontrado!");

        }
        else {
            this.produtosConsumidos.push(produto)
            console.log("Produto Adicionado!");


        }
    }
}