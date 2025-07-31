import { useState } from "react"

function Card({title, bnt}) {

    const [num, setNum] = useState("Vazio")

    function mudarTexto() {
        setNum("Preenchido")
    }

    return (
        <>
            <section className="background-card">
                <h3>{title}</h3>
                <button onClick={mudarTexto}>{bnt}</button>
                <p>{num}</p>
            </section>
        </>
    )
}

export default Card