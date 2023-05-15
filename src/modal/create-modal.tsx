import { useState } from "react"
import { useFoodDataMutate } from "../hooks/useFoodDataMutate";
import { FoodData } from "../interface/FoodData";
import { NumericFormat } from "react-number-format";

// ...

export const MyInput: React.FC = () => {
	return <NumericFormat />
};

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)} />
        </>
    )
}

const PriceInput = ({ value, updateValue }: InputProps) => {
    const handlePriceChange = (values: any) => {
        updateValue(values.floatValue || '');
    };

    return (
        <NumericFormat
            value={value}
            thousandSeparator={'.'}
            decimalSeparator={','}
            prefix={'R$ '}
            decimalScale={2}
            fixedDecimalScale={true}
            allowNegative={false}
            onValueChange={handlePriceChange}
        />
    );
};

export function CreateModal() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [imgUrl, setImg] = useState("");
    const { mutate } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            imgUrl
        }
        mutate(foodData)
    }

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="Nome" value={title} updateValue={setTitle} />
                    <PriceInput label="Preço" value={price} updateValue={setPrice} />
                    <Input label="URL da imagem" value={imgUrl} updateValue={setImg} />
                </form>
                <button onClick={submit} className="btn-secondary">Cadastrar</button>
            </div>
        </div>
    )
}
