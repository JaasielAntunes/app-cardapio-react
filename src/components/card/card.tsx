interface CardProps {
    price: number,
    title: string,
    img: string
}

export function Card({ price, img, title } : CardProps) {
    return(
        <div className="card">
            <img src={img} alt="imagem" />
            <h2>{title}</h2>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}