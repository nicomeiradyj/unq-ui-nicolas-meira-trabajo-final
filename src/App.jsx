import {useEffect, useRef, useState} from 'react'
import './App.css'
import Timer from './components/Timer';
import ScoreBoard from './components/ScoreBoard';
import WordChain from './components/WordChain';
import WordInput from './components/WordInput';
import GameOver from './components/GameOver';
import LeaderBoard from './components/LeaderBoard';
import NextLetter from './components/NextLetter';
import { validateWord } from './services/api';

function App() {
  const [words, setWords] = useState([]);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const scoreRef = useRef(score);
  const wordsRef = useRef(words);

    useEffect(() => {
        scoreRef.current = score;
    });

    useEffect(() => {
        wordsRef.current = words;
    });

    useEffect(() => {
        if (!timerActive || gameOver) return;
        if (timeLeft === 0) return;

        const id = setTimeout(() => setTimeLeft(t => t - 1), 1000);
        return () => clearTimeout(id);
    }, [timeLeft, timerActive, gameOver]);

    useEffect(() => {
        if (timerActive && timeLeft === 0 && !gameOver) {
            setGameOver(true);
            const raw = localStorage.getItem('leaderboard');
            const scores = raw ? JSON.parse(raw) : []; // esto es para guardar el top 10 del leaderboard local
            scores.push({
                score: scoreRef.current,
                wordCount: wordsRef.current.length,
            });
            scores.sort((a, b) => b.score - a.score);
            localStorage.setItem('leaderboard', JSON.stringify(scores.slice(0, 10)));
        }
    }, [timeLeft, timerActive, gameOver]);

    const handleWordSubmit = async (word) => {
        setError(null);

        // valido encadenamiento, esto no aplica para la primer palabra por eso pongo el &&
        const lastWord = words[words.length - 1];
        if (lastWord && word[0] !== lastWord[lastWord.length - 1]) {
            setError('La palabra no respeta la cadena');
            return;
        }

        if (words.includes(word)) {
            setError('La palabra ya fue utilizada');
            return;
        }

        const exists = await validateWord(word);
        if (!exists) {
            setError('La palabra no existe');
            return;
        }

        setWords([...words, word]);
        setScore(prev => prev + word.length);
        setTimeLeft(15);
        if (!timerActive) {
            setTimerActive(true);
        }
    };

    const handleRestart = () => { // para reiniciar el juego
        setWords([]);
        setScore(0);
        setTimeLeft(15);
        setGameStarted(false);
        setGameOver(false);
        setError(null);
        setTimerActive(false);
    };

    return (
        <div className="App">
            <h1>Palabras Encadenadas</h1>

            {!gameStarted && !gameOver && (
                <div className="start-screen">
                    <button className="start-btn" onClick={() => setGameStarted(true)}>
                        Jugar
                    </button>
                </div>
            )}

            {gameStarted && !gameOver && (
                <div className="game-container">
                    <Timer timeLeft={timeLeft} />
                    <NextLetter lastWord={words[words.length - 1]} />
                    <ScoreBoard score={score} />
                    <WordInput onSubmit={handleWordSubmit} disabled={false} />
                    {error && <p className="error-message">{error}</p>}
                    <WordChain words={words} />
                </div>
            )}

            {gameOver && (
                <>
                    <GameOver
                        score={score}
                        wordCount={words.length}
                        onRestart={handleRestart}
                    />
                    <LeaderBoard />
                </>
            )}
        </div>
    );
}

export default App
