export default class Servico{
    public nome: string
    public preco: number
    public id: number
    constructor(nome: string, preco: number,id: number){
        this.preco=preco
        this.nome=nome
        this.id = id
    }

    public get getNomeServiço():string{
        return this.nome
    }
    public get getPrecoServiço():number{
        return this.preco
    }
}