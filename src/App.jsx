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

  return (
    <div className="App">
      {gameState === 'start' && (
        <div className="start-screen">
          <h1>🧩 Riddle Game</h1>
          <p>Test your brain with 5 tricky riddles!</p>
          <button onClick={startGame}>Start Game</button>
        </div>
      )}
    </div>
  );
}

export default App;