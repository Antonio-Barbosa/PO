export default class Servico{
    public nome!: string
    public preco!: number
    constructor(nome: string, preco: number){
        this.preco=preco
        this.nome=nome
    }
    public get getNomeServiço():string{
        return this.nome
    }
    public get getPrecoServiço():number{
        return this.preco
    }
}