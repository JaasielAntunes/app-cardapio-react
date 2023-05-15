interface CardProps {
    price: number,
    title: string,
    img: string
}

export function Card({ price, img, title } : CardProps) {
    return(
        <div className="card">
            <img src="" alt="" />
            <h2></h2>
            <p><b>Valor:</b></p>
        </div>
    )
}