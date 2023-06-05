import './header.css';
import logo from '../images/logo.svg';

export default function Header() {
    return (
        <header className="header">
            <img src={logo} className="logo" alt="logo" />
            <ul className="main-navigation">
                <li>
                    <a href="">About page</a>
                </li>
                <li>
                    <a href="">Project page</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
      </header>
    );
  }