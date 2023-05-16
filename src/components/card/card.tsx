import "./card.css";

interface CardProps {
    price: number,
    title: string,
    imgUrl: string
}

export function Card({ price, imgUrl, title }: CardProps) {
    const formattedPrice = price.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return (
        <div className="card">
            <img src={imgUrl} alt="imagem" />
            <h2>{title}</h2>
            <p>
                <b>Preço: R$ {formattedPrice}</b>
            </p>
        </div>
    );
}
