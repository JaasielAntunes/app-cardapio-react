/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
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

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)} />
        </>
    )
}

const PriceInput = ({ label, value, updateValue }: InputProps) => {
    const handlePriceChange = (values: any) => {
        updateValue(values.floatValue || '');
    };

    return (
        <>
            <label>{label}</label>
            <NumericFormat
                value={value}
                thousandSeparator={'.'}
                decimalSeparator={','}
                prefix={'R$ '}
                decimalScale={2}
                fixedDecimalScale={true}
                allowNegative={false}
                onValueChange={handlePriceChange}
                customInput={inputProps => <input {...inputProps} />}
            />
        </>
    );
};

export function CreateModal({ closeModal }: ModalProps) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [imgUrl, setImg] = useState("");
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            imgUrl
        }
        mutate(foodData)
    }

    useEffect(() => {
        if (!isSuccess) return
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2 className="texto-cadastre">Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="Nome" value={title} updateValue={setTitle} />
                    <PriceInput label="Preço" value={price} updateValue={setPrice} />
                    <Input label="URL da imagem" value={imgUrl} updateValue={setImg} />
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? "Postando..." : "Cadastrar"}
                </button>
            </div>
        </div>
    )
}
