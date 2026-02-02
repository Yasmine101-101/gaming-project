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
