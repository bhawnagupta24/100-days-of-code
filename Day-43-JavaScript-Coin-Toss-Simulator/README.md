# Day 43 – JavaScript Coin Toss Simulator 🪙

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

A simple JavaScript project that simulates a coin toss using random number generation.

The program generates a random value using `Math.random()` and determines whether the result is **Heads** or **Tails** based on the generated number.

---

## 🎯 Features

- Random coin toss simulation
- Heads or Tails prediction
- Conditional logic implementation
- Result storage using variables
- Beginner-friendly JavaScript project

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

Generates a random decimal number between 0 and 1.

---

### Conditional Statements

```javascript
if (...) {
}
else {
}
```

Used to determine the coin toss result.

---

### Variables

```javascript
const num = Math.random();
let result;
```

Stores random values and final outcomes.

---

## 💻 Program Logic

### Coin Toss

```javascript
const num = Math.random();

if (num < 0.5) {
  console.log('heads');
} else {
  console.log('tails');
}
```

---

### Store Result in Variable

```javascript
const numb = Math.random();
let result;

if (numb < 0.5) {
  result = 'heads';
} else {
  result = 'tails';
}
```

---

## 🎲 Probability Logic

```text
0.0 - 0.49  → Heads
0.5 - 0.99  → Tails
```

Each outcome has approximately a 50% chance of occurring.

---

## 🚀 Learning Outcome

Through this project I learned:

- Using Math.random() effectively
- Implementing conditional logic
- Creating simple game mechanics
- Storing outcomes in variables
- Understanding probability in programming

---

## 🌟 Project Goal

To understand random number generation and build a simple coin toss simulator using JavaScript.

---

✅ Day 43 Completed
