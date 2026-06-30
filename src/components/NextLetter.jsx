function NextLetter({ lastWord }) {
    if (!lastWord) return null;
    const letter = lastWord[lastWord.length - 1];
    return (
        <div className="next-letter">
            <span className="next-letter-label">Siguiente palabra con</span>
            <span className="next-letter-value">{letter.toUpperCase()}</span>
        </div>
    );
}
export default NextLetter;