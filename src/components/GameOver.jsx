function GameOver({ score, wordCount, onRestart }) {
    return (
        <div className="game-over">
            <h2>Fin de la partida</h2>
            <p className="game-over-summary">Puntaje final: {score}</p>
            <p className="game-over-words">Palabras encadenadas: {wordCount}</p>
            <button onClick={onRestart}>Jugar de nuevo</button>
        </div>
    );
}
export default GameOver;