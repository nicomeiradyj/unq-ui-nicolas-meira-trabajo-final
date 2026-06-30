function WordChain({ words }) {
    return (
        <ul>
            {words.map((word, i) => (
                <li key={i}>{word}</li>
            ))}
        </ul>
    );
}
export default WordChain;