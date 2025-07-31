function Header({home, serv, cont, blog}) {
    return (
        <>
            <header className="background-header">
                <nav className="nav">
                    <a href="">{home}</a>
                    <a href="">{serv}</a>
                    <a href="">{cont}</a>
                    <a href="">{blog}</a>
                </nav>
            </header>
        </>
    )
}

export default Header