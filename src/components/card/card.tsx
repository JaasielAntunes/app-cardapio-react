import "./card.css";

interface CardProps {
    price: number,
    title: string,
    imgUrl: string
}

export function Card({ price, imgUrl, title }: CardProps) {
    return (
        <div className="card">
            <img src={imgUrl} alt="imagem" />
            <h2>{title}</h2>
            <p><b>Preço: </b>{price}</p>
        </div>
    )
}