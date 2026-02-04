# gaming-project
# 🧩 Riddle Game

A simple and fun riddle quiz game built with React. Test your brain by answering 5 tricky riddles and see how well you score.

## Features

- 5 multiple choice riddles
- Instant feedback on correct and wrong answers
- Score tracking with percentage at the end

- Responsive design that works on mobile and desktop

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- npm (comes installed with Node.js)

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
```

2. Go into the project folder

```bash
cd riddle-game
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm start
```

The app will open automatically in your browser at `http://localhost:3000`.

## How to Play

1. Click **Start Game** on the home screen
2. Read the riddle and pick your answer from the options
3. You will see instantly whether your answer was correct or wrong
4. Click **Next Question** to move to the next riddle
5. After answering all 5 riddles, your final score and percentage will be shown
6. Click **Play Again** to restart the game

Visual representation:

Score	Calculation	Result	Percentage
0	0/5 * 100	0	0%
1	1/5 * 100	20	20%
2	2/5 * 100	40	40%
3	3/5 * 100	60	60%
4	4/5 * 100	80	80%
5	5/5 * 100	100	100%

## Project Structure

```
riddle-game/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx          # Main game logic and screens
│   ├── App.css          # All styles for the app
│            # Entry point
├── package.json
└── README.md
```

- **App.jsx** — Contains the riddles data, game state logic, and all three screens (start, playing, finished)
- **App.css** — Contains all the styles including the navbar, game cards, buttons, feedback, and responsive rules

## Technologies Used

- [React](https://react.dev/)
- CSS (no external CSS libraries)

