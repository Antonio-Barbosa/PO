export default class Produto {
    public nome: string;
    public preco: number;
    private produtoID: number
    constructor(nome: string, preco: number, produtoID: number) {
        this.nome = nome
        this.preco = preco
        this.produtoID = produtoID

    }
    public get getNome(): string{
        return this.nome
    }
    public get getPreco():number {
        return this.preco
    }
    public get getProdutoID(): number {
        return this.produtoID
    }
}