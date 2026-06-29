# Day 57 – JavaScript Coin Toss Game with Functions 🪙🎮

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

A simple interactive Coin Toss Game built using HTML and JavaScript.

Users can click either the **Heads** or **Tails** button to make their prediction. The program generates a random coin toss result and compares it with the user's guess to determine whether they win or lose.

The project focuses on reusable functions, random number generation, and conditional logic.

---

## 🎯 Features

- Heads and Tails selection buttons
- Random coin toss generation
- Win/Lose result display
- Reusable game function
- Event handling with buttons
- Beginner-friendly game logic

---

## 🛠 Tech Stack

- HTML5
- JavaScript (ES6)

---

## 📚 Concepts Practiced

### Functions

```javascript
function playGame(guess)
```

---

### Parameters

```javascript
guess
```

---

### Ternary Operator

```javascript
randomNumber < 0.5 ? 'heads' : 'tails'
```

---

### Math.random()

```javascript
Math.random()
```

---

### Event Handling

```javascript
onclick=""
```

---

## 💻 Program Logic

### Generate Random Coin Toss

```javascript
const randomNumber = Math.random();
const result = randomNumber < 0.5 ? 'heads' : 'tails';
```

---

### Compare User Guess

```javascript
guess === result
```

---

### Display Result

```javascript
console.log(
  guess === result ? 'You win!' : 'You lose!'
);
```

---

## 🚀 Learning Outcome

Through this project I learned:

- Creating reusable functions
- Passing arguments to functions
- Handling button click events
- Generating random outcomes
- Building simple interactive games

---

## 🌟 Project Goal

To understand how functions, event handling, and random number generation work together to build interactive JavaScript applications.

---

## 📂 Project Structure

```bash
Day-57-JavaScript-Coin-Toss-Game-With-Functions
│
├── index.html
└── README.md
```

---

✅ Day 57 Completed
