import { Link } from "react-router-dom";




const Header = () => {
    return (
        <header className="header">
            <Link className="head" to="/">Home</Link>
            <Link className="head" to="/ListaPost">Lista dos Estados</Link>
        </header>);
};


export default Header; 