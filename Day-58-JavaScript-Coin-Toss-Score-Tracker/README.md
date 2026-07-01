# Day 58 – JavaScript Coin Toss Score Tracker 🪙📊

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

An enhanced version of the Coin Toss Game that keeps track of the player's performance.

Users can choose **Heads** or **Tails**, and after each round the game updates the number of wins and losses.

The score is saved using the browser's **Local Storage**, allowing progress to persist even after refreshing the page.

---

## 🎯 Features

- Interactive Heads and Tails buttons
- Random coin toss generation
- Win/Lose result detection
- Score tracking
- Wins counter
- Losses counter
- Local Storage integration
- Persistent game progress

---

## 🛠 Tech Stack

- HTML5
- JavaScript (ES6)
- Browser Local Storage API

---

## 📚 Concepts Practiced

### Objects

```javascript
const score = {
  wins: 0,
  losses: 0
};
```

---

### Math.random()

```javascript
Math.random()
```

---

### Ternary Operator

```javascript
randomNumber < 0.5 ? 'heads' : 'tails'
```

---

### Local Storage

Save score:

```javascript
localStorage.setItem(
  'scores',
  JSON.stringify(scores)
);
```

Retrieve score:

```javascript
JSON.parse(localStorage.getItem('score'))
```

---

### JSON Methods

```javascript
JSON.stringify()
JSON.parse()
```

---

## 💻 Program Logic

### Generate Coin Toss

```javascript
const result =
randomNumber < 0.5 ? 'heads' : 'tails';
```

---

### Compare User Guess

```javascript
guess === result
```

---

### Update Score

```javascript
scores.wins++;
scores.losses++;
```

---

### Save Progress

```javascript
localStorage.setItem(
  'scores',
  JSON.stringify(scores)
);
```

The score is automatically stored so it remains available after refreshing the page.

---

## 🚀 Learning Outcome

Through this project I learned:

- Working with JavaScript objects
- Tracking application state
- Using Local Storage
- Converting objects with JSON
- Building persistent browser applications
- Improving interactive game logic

---

## 🌟 Project Goal

To build an interactive Coin Toss Game that stores player statistics using JavaScript objects and the Local Storage API.

---

## 📂 Project Structure

```bash
Day-58-JavaScript-Coin-Toss-Score-Tracker
│
├── index.html
└── README.md
```

---

✅ Day 58 Completed
