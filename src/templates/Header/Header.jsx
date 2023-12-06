import '../../styles/Header.scss';
import { Logo, Button } from "../../components";

const Header = () => (
  <header className="header">
    <Logo />
    <Button secondary text="Apply for access" />
  </header>
)

export { Header }