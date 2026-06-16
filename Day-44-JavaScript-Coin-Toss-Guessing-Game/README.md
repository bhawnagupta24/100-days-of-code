# Day 44 – JavaScript Coin Toss Guessing Game 🪙🎮

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

A simple JavaScript game where a random coin toss result is generated and compared with the user's guess.

If the user's guess matches the generated result, the game displays:

```text
You win!
```

Otherwise:

```text
You lose!
```

This project combines random number generation, conditionals, comparison operators, and game logic.

---

## 🎯 Features

- Random coin toss simulation
- User prediction system
- Heads or Tails result generation
- Win/Lose outcome
- Beginner-friendly game logic
- Conditional comparison

---

## 🛠 Tech Stack

- HTML5
- JavaScript (ES6)

---

## 📚 Concepts Practiced

### Random Number Generation

```javascript
Math.random()
```

### Conditional Statements

```javascript
if
else
```

### Comparison Operators

```javascript
===
```

### Variables

```javascript
const
let
```

---

## 💻 Program Logic

### Generate Random Result

```javascript
const randomNumber = Math.random();
```

### Decide Heads or Tails

```javascript
if (randomNumber < 0.5) {
  result = 'heads';
} else {
  result = 'tails';
}
```

### User Guess

```javascript
const guess = 'heads';
```

### Check Win or Lose

```javascript
if (guess === result) {
  console.log('You win!');
} else {
  console.log('You lose!');
}
```

---

## 🎲 Probability

```text
Heads → 50%
Tails → 50%
```

Each toss has an equal chance of being selected.

---

## 🚀 Learning Outcome

Through this project I learned:

- Creating simple game logic
- Comparing values using ===
- Using random number generation
- Combining variables and conditionals
- Building prediction-based programs

---

## 🌟 Project Goal

To understand how random outcomes and user predictions can be combined to create simple interactive games using JavaScript.

---

✅ Day 44 Completed
