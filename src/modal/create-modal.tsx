interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: string | number): void
}

const Input = ({label, value, updateValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)} />
        </>
    )
}

export function CreateModal() {
    return (
        <div className="modal-overflow">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">

                </form>
            </div>
        </div>
    )
}
