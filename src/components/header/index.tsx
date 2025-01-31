import { SHeader } from "./styles"
import logo from "../../assets/react.svg"
export function Header() {
    return (
        <SHeader>
            <img src={logo} alt="Logo" />
            <div>
                <a href="/">Listar</a>
            </div>
        </SHeader>
    )
}
