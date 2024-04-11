import { ReactNode } from "react"
import { Container } from './style';

type FrontEndProps = {
    children: ReactNode
}

export function FrontEnd({ children }: FrontEndProps) {
    return (
        <Container>{children}</Container>
    )
}