# Day 56 – JavaScript Calculator with Local Storage 🧮💾

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

An enhanced version of the JavaScript Basic Calculator that stores calculation data using the browser's Local Storage.

Unlike a normal calculator, the entered expression and calculated result remain available even after refreshing the page.

This project introduces browser storage concepts and state persistence.

---

## 🎯 Features

- Number buttons (0–9)
- Arithmetic operations (+, -, *, /)
- Decimal support
- Evaluate expressions
- Clear calculator
- Save calculation automatically
- Restore calculation after page refresh
- Local Storage integration

---

## 🛠 Tech Stack

- HTML5
- JavaScript (ES6)
- Browser Local Storage API

---

## 📚 Concepts Practiced

### Variables

```javascript
let calculation = localStorage.getItem('calculation') || '';
```

---

### Functions

```javascript
updateCalculation(value)
saveCalculation()
```

---

### Local Storage

Save data:

```javascript
localStorage.setItem('calculation', calculation);
```

Retrieve data:

```javascript
localStorage.getItem('calculation');
```

---

### Event Handling

```javascript
onclick=""
```

---

### Expression Evaluation

```javascript
eval(calculation);
```

---

## 💻 Program Logic

### Build Expression

```javascript
updateCalculation('1');
updateCalculation(' + ');
updateCalculation('2');
```

---

### Calculate Result

```javascript
calculation = eval(calculation);
```

---

### Save Result

```javascript
localStorage.setItem('calculation', calculation);
```

---

### Restore Previous Calculation

```javascript
let calculation =
localStorage.getItem('calculation') || '';
```

If a previous calculation exists, it is loaded automatically when the page opens.

---

## 🚀 Learning Outcome

Through this project I learned:

- Working with Browser Local Storage
- Persisting application data
- Saving and retrieving values
- Building stateful web applications
- Improving calculator functionality

---

## 🌟 Project Goal

To understand how Local Storage works in JavaScript and build a calculator that remembers user calculations even after the browser is refreshed.

---

## 📂 Project Structure

```bash
Day-56-JavaScript-Calculator-With-LocalStorage
│
├── index.html
└── README.md
```

---

✅ Day 56 Completed
