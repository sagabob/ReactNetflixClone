import { Area } from "./styles";
import { NavbarAreaProps } from "./types";


export default function Navbar({ children, ...restProps }: NavbarAreaProps) {
    return (
        <Area {...restProps}>{children}</Area>
    );
}
