import { Link } from "react-router-dom"

function Footer({home, serv, cont, blog}) {
    return (
        <>
            <footer className="nav">
                <Link to="/">{home}</Link>
                <Link to="/servico">{serv}</Link>
                <Link to="/contato">{cont}</Link>
                <Link to="/blog">{blog}</Link>
                <Link to="/main">Chamar componente</Link>
            </footer>
        </>
    )
}

export default Footer
