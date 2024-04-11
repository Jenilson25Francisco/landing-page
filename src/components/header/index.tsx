import { HeaderContainer, HeaderNav } from "./style";
import LogoImg from "../../assets/Logo.svg"

export function Header() {
    return (
        <HeaderContainer>
            <img src={LogoImg} alt="Logo da página" />
            <HeaderNav>

            </HeaderNav>
        </HeaderContainer>
    )
}