export default class RG {
    private valor: string
    private dataEmissao: string

    constructor(valor: string, dataEmisao: string) {
        this.valor = valor
        this.dataEmissao = dataEmisao;
    }
    public get getValor(): string {
        return this.valor

    }
    public get getDataEmissao(): string {
        return this.dataEmissao
    }
}