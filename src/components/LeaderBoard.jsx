function LeaderBoard() {
    const raw = localStorage.getItem('leaderboard');
    const scores = raw ? JSON.parse(raw) : [];

    if (scores.length === 0) return null;

    return (
        <div className="leaderboard">
            <h3>Top 10 - Mejores puntajes</h3>
            <ol className="leaderboard-list">
                {scores.map((entry, i) => (
                    <li key={i} className="leaderboard-item">
                        <span className="leaderboard-rank">#{i + 1}</span>
                        <span>{entry.score} pts</span>
                        <span className="leaderboard-words">{entry.wordCount} palabras</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}
export default LeaderBoard;