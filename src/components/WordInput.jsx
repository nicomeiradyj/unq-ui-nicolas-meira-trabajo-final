import {useState} from "react";

function WordInput({ onSubmit, disabled }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSubmit(input.trim().toLowerCase());
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={disabled}
            />
            <button type="submit" disabled={disabled}>Enviar</button>
        </form>
    );
}
export default WordInput;