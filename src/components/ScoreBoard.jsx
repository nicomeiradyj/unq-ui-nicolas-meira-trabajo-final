function Scoreboard({ score }) {
    return (
        <div className="score-board">
            <span className="score-label">Puntaje</span>
            <span className="score-value">{score}</span>
        </div>
    );
}

export default Scoreboard;