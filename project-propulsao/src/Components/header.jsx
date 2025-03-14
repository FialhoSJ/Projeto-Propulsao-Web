import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to='/'>PROPULSÃO ANANIN</Link>
        </header>
    )
}

export default Header;
