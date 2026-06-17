# Day 45 – JavaScript Ternary Coin Toss Game 🪙⚡

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

A concise version of the Coin Toss Guessing Game built using the JavaScript **Ternary Operator**.

Instead of using traditional if-else statements, the program uses ternary operators to:

- Generate Heads or Tails
- Check if the user's guess is correct
- Display Win or Lose messages

This project focuses on writing cleaner and shorter JavaScript code.

---

## 🎯 Features

- Random coin toss generation
- Heads or Tails outcome
- User prediction system
- Win/Lose result
- Ternary operator implementation
- Cleaner JavaScript syntax

---

## 🛠 Tech Stack

- HTML5
- JavaScript (ES6)

---

## 📚 Concepts Practiced

### Math.random()

```javascript
Math.random()
```

Generates a random number between 0 and 1.

---

### Ternary Operator

```javascript
condition ? value1 : value2
```

Short-hand version of if-else statements.

---

### Strict Equality

```javascript
===
```

Compares values and data types.

---

## 💻 Program Logic

### Generate Heads or Tails

```javascript
const result = randomNumber < 0.5 ? 'heads' : 'tails';
```

### User Guess

```javascript
const guess = 'heads';
```

### Check Result

```javascript
console.log(
  guess === result ? 'You win!' : 'You lose!'
);
```

---

## 🚀 Learning Outcome

Through this project I learned:

- Using ternary operators effectively
- Writing cleaner JavaScript code
- Simplifying conditional statements
- Understanding concise programming techniques
- Improving readability of small programs

---

## 🌟 Project Goal

To understand how ternary operators can replace simple if-else statements and make code more concise and efficient.

---

✅ Day 45 Completed
