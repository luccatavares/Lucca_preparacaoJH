import { useEffect, useState } from "react"
import { apiProduto } from "../../services/data"
import { AxiosError } from "axios"
import { CompLoading } from "../../components"
import { SSection } from "./styles"
import { IProduto } from "../../services/data/produto"

export function Lista() {
    const [dados, setDados] = useState<IProduto[]>()
    const [load, setLoad] = useState(false)
    useEffect(() => {
        async function getProduto(){
            try {
                setLoad(true)
                const resp = await apiProduto.index()
                setDados(resp.data)
            } catch (error) {
                const err = error as AxiosError
                console.log(err.response?.data) 
            } finally {
                setLoad(false)
            }
        }
        getProduto()
    },[])
    if(load) {
        return <CompLoading />
    }
    return(
        <SSection>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {dados && dados.map(item => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td>{item.preco}</td>
                            <td>{item.quantidade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </SSection>
    )
}