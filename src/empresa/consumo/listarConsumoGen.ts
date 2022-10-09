
import Cliente from "../../model/cliente";
import Listagem from "../listagem"


export default class ListarConsumoGen extends Listagem {
    private clientes: Array<Cliente>
    
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let filtrado: any;
        let feminino: any;
        // -- Filtro por Gênero --

        filtrado = this.clientes.reduce(( acc, cur ) => {

            cur.getProdutosConsumidos.forEach( p => {
                if(acc[cur.genero][`produto_${p.getProdutoID}`]){
                    acc[cur.genero][`produto_${p.getProdutoID}`].qtd++
                }else{
                    acc[cur.genero][`produto_${p.getProdutoID}`] = { qtd:1, nome:p.getNome }
                }
            })
            cur.getServicosConsumidos.forEach( s => {
                if(acc[cur.genero][`servico_${s.id}`]){
                    acc[cur.genero][`servico_${s.id}`].qtd++
                }else{
                    acc[cur.genero][`servico_${s.id}`] = {qtd:1, nome:s.getNomeServiço}
                }
            })
            return acc

        },{M:{}, F:{}})

        let ordenadoM = Object.keys(filtrado.M).map(k=>{
            const [tipo,id] = k.split("_")
            return {id, tipo, qtd:filtrado.M[k].qtd, nome:filtrado.M[k].nome}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)

        let ordenadoF = Object.keys(filtrado.F).map( k => {
            const [tipo,id] = k.split("_")
            return {id, tipo, qtd:filtrado.F[k].qtd, nome:filtrado.F[k].nome}
        }).sort((a, b) => b.qtd - a.qtd).slice(0, 3)

        console.log(`Listagem dos serviços ou produtos mais consumidos por gênero`);

        console.log(`\n--------------------------------------\n`);

        console.log(`Masculino`);

        ordenadoM.forEach( (items, index) => {
            console.log(`${index + 1}°`);
            console.log(`Id do ${items.tipo}: ${items.id}`);
            console.log(`Nome do ${items.tipo}: ${items.nome}`);
            console.log(`Quantidade Consumido: ${items.qtd}\n`);
        } )

        console.log(`\n--------------------------------------\n`);

        console.log(`Feminino`);

        ordenadoF.forEach( (items, index) => {
            console.log(`${index + 1}°`);
            console.log(`Id do produto: ${items.id}`);
            console.log(`Nome do ${items.tipo}: ${items.nome}`);
            console.log(`Quantidade Consumido: ${items.qtd}\n`);
        } )

        console.log(`\n--------------------------------------\n`);

    }

}