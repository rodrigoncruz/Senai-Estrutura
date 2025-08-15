import { Link } from "react-router-dom"

function Header({home, serv, cont, blog}) {
    return (
        <>
            <header className="background-header">
                <nav className="nav">
                    <Link to="/">{home}</Link>
                    <Link to="/servico">{serv}</Link>
                    <Link to="/contato">{cont}</Link>
                    <Link to="/blog">{blog}</Link>
                    <Link to="/main">Chamar componente</Link>
                </nav>
            </header>
        </>
    )
}

export default Header