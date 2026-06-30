function Timer({ timeLeft }) {
    return (
        <div className={`timer ${timeLeft <= 5 ? 'timer-danger' : ''}`}>
            <span className="timer-value">{timeLeft}</span>
            <span className="timer-label">segundos</span>
        </div>
    );
}

export default Timer;