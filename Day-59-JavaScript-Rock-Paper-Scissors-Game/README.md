# Day 59 – JavaScript Rock Paper Scissors Game ✊📄✂️

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

An interactive Rock Paper Scissors game built using HTML and JavaScript.

The player selects **Rock**, **Paper**, or **Scissors**, while the computer randomly generates its move. The game determines the winner, updates the score, and stores the results using the browser's Local Storage.

This project combines game logic, conditional statements, random number generation, objects, and persistent browser storage.

---

## 🎯 Features

- Rock, Paper, and Scissors gameplay
- Random computer move generation
- Win, Lose, and Tie detection
- Score tracking
- Local Storage support
- Reset score functionality
- Interactive button controls
- Persistent game progress

---

## 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Browser Local Storage API

---

## 📚 Concepts Practiced

### Functions

```javascript
playGame(playerMove)
pickComputerMove()
```

### Objects

```javascript
const score = {
  win: 0,
  lose: 0,
  tie: 0
};
```

### Conditional Statements

```javascript
if
else if
else
```

### Math.random()

```javascript
Math.random()
```

### Local Storage

```javascript
localStorage.setItem()
localStorage.getItem()
localStorage.removeItem()
```

### JSON Methods

```javascript
JSON.stringify()
JSON.parse()
```

---

## 💻 Program Logic

### Generate Computer Move

```javascript
const randomNumber = Math.random();
```

Randomly selects:

- Rock
- Paper
- Scissors

---

### Determine Winner

The player's move is compared with the computer's move using conditional statements.

Possible outcomes:

- ✅ You Win
- ❌ You Lose
- 🤝 Tie

---

### Update Score

```javascript
score.win++;
score.lose++;
score.tie++;
```

The score updates after every round.

---

### Save Progress

```javascript
localStorage.setItem(
  'score',
  JSON.stringify(score)
);
```

The score is stored in Local Storage and automatically restored when the page reloads.

---

### Reset Score

```javascript
localStorage.removeItem('score');
```

Clears all saved game statistics.

---

## 🚀 Learning Outcome

Through this project I learned:

- Building complete game logic
- Using JavaScript objects for state management
- Generating random computer moves
- Working with Local Storage
- Saving and restoring application data
- Creating interactive browser games

---

## 🌟 Project Goal

To build a fully functional Rock Paper Scissors game with score tracking and persistent storage using modern JavaScript concepts.

---

## 📂 Project Structure

```bash
Day-59-JavaScript-Rock-Paper-Scissors-Game
│
├── index.html
├── style.css
└── README.md
```

---

✅ Day 59 Completed
