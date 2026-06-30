function Timer({ timeLeft }) {
    return (
        <div className={`timer ${timeLeft <= 5 ? 'timer-danger' : ''}`}>
            <p>{timeLeft}s</p>
        </div>
    );
}
export default Timer;