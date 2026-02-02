import { useState } from 'react';
import './App.css';



const riddles = [
  {
    id: 1,
    question: "What has keys but can't open locks?",
    options: ["Piano", "Keyboard", "Map", "Car"],
    correctAnswer: "Keyboard"
  },
  {
    id: 2,
    question: "What has hands but can't clap?",
    options: ["Clock", "Gloves", "Monkey", "Robot"],
    correctAnswer: "Clock"
  },
  {
    id: 3,
    question: "What has a head and a tail but no body?",
    options: ["Snake", "Coin", "Arrow", "Fish"],
    correctAnswer: "Coin"
  },
  {
    id: 4,
    question: "What gets wetter the more it dries?",
    options: ["Towel", "Sponge", "Rain", "Ocean"],
    correctAnswer: "Towel"
  },
  {
    id: 5,
    question: "What has teeth but cannot bite?",
    options: ["Comb", "Saw", "Zipper", "All of the above"],
    correctAnswer: "All of the above"
  }
];

function App() {
 
  const [gameState, setGameState] = useState('start');
  
  
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  
  
  const [score, setScore] = useState(0);
  
  
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
 
  const [showNext, setShowNext] = useState(false);
  
 
  console.log('Game State:', gameState);
  console.log('Current Riddle Index:', currentRiddleIndex);
  console.log('Score:', score);
  console.log('Selected Answer:', selectedAnswer);
  console.log('Show Next:', showNext);

  
  const startGame = () => {
    setGameState('playing');
    console.log('Game started!');
  };

  
  const handleAnswerClick = (option) => {
    console.log('Clicked:', option);
    setSelectedAnswer(option);
    
    const currentRiddle = riddles[currentRiddleIndex];
    if (option === currentRiddle.correctAnswer) {
      console.log('Correct!');
      setScore(score + 1);
    } else {
      console.log('Wrong!');
    }
    
    setShowNext(true);
  };

  
  const handleNext = () => {
    
    if (currentRiddleIndex === riddles.length - 1) {
      
      setGameState('finished');
      console.log('Game finished! Final score:', score);
    } else {
     
      setCurrentRiddleIndex(currentRiddleIndex + 1);
      setSelectedAnswer(null);
      setShowNext(false);
      console.log('Moving to riddle', currentRiddleIndex + 2);
    }
  };

  
  const restartGame = () => {
    setGameState('start');
    setCurrentRiddleIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowNext(false);
    console.log('Game restarted!');
  };

  return (
    <div className="App">
      {gameState === 'start' && (
        <div className="start-screen">
          <h1> Riddle Game</h1>
          <p>Test your brain with 5 tricky riddles!</p>
          <button onClick={startGame}>Start Game</button>
        </div>
      )}

      {gameState === 'playing' && (
        <div className="game-screen">
          <div className="progress">
            Question {currentRiddleIndex + 1} of {riddles.length}
          </div>
          
          <h2 className="question">
            {riddles[currentRiddleIndex].question}
          </h2>
          
          <div className="options">
            {riddles[currentRiddleIndex].options.map((option) => {
              let buttonClass = 'option-button';
              
              if (selectedAnswer) {
                
                if (option === riddles[currentRiddleIndex].correctAnswer) {
                  buttonClass += ' correct';
                }
                
                else if (option === selectedAnswer) {
                  buttonClass += ' incorrect';
                }
              }
              
              return (
                <button
                  key={option}
                  className={buttonClass}
                  onClick={() => handleAnswerClick(option)}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {showNext && (
            <div className={`feedback ${selectedAnswer === riddles[currentRiddleIndex].correctAnswer ?
             'correct-feedback' : 'incorrect-feedback'}`}>
              {selectedAnswer === riddles[currentRiddleIndex].correctAnswer 
                ? '✓ Correct!' 
                : '✗ Wrong answer'}
            </div>
          )}

          {showNext && (
            <button className="next-button" onClick={handleNext}>
              {currentRiddleIndex === riddles.length - 1 ? 'See Results' : 'Next Question'}
            </button>
          )}
        </div>
      )}

      {gameState === 'finished' && (
        <div className="end-screen">
          <h1> Game Over!</h1>
          <div className="score-display">
            <p className="score-text">Your Score</p>
            <p className="score-number">{score} / {riddles.length}</p>
            <p className="score-percentage">
              {Math.round((score / riddles.length) * 100)}%
            </p>
          </div>
          <button onClick={restartGame}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default App;


