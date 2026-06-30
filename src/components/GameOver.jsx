function GameOver({ score, wordCount, onRestart }) {
    return (
        <div>
            <h2>Fin de la partida</h2>
            <p>Puntaje final: {score}</p>
            <p>Palabras encadenadas: {wordCount}</p>
            <button onClick={onRestart}>Jugar de nuevo</button>
        </div>
    );
}
export default GameOver;