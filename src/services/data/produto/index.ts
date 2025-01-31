import { api } from "../../api"
export interface IProduto {
    id: number
    nome: string
    preco: number
    quantidade: number
}
class ProdutoData {
    index() {
        return api.get<IProduto[]>('/produto')
    }
}
export default new ProdutoData