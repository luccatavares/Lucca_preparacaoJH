import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SHeader = styled.header`
    display: flex;
    background-color: ${colors.secondary};
    align-items: center;
    justify-content: space-between;
    img {
        height: 60px;
        padding: 0.5rem;
    }
    div {
        display: flex;
        a {
            text-decoration: none;
            margin: 0 0.7rem;
            color: ${colors.white};
            font-size: 1.3rem;
        }
        a:hover {
            font-weight: bold;
        }
    }
`