# Day 51 – JavaScript Basic Calculator 🧮

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

A simple calculator built using HTML and JavaScript.

Users can click number and operator buttons to create mathematical expressions and calculate results dynamically.

This project focuses on event handling, functions, variables, and basic calculator logic.

---

## 🎯 Features

- Number buttons (0–9)
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Decimal support (.)
- Clear button
- Evaluate expressions
- Dynamic calculation building

---

## 🛠 Tech Stack

- HTML5
- JavaScript (ES6)

---

## 📚 Concepts Practiced

### Variables

```javascript
let calculation = '';
```

### Functions

```javascript
function updateCalculation(value)
```

### String Concatenation

```javascript
calculation += value;
```

### Event Handling

```javascript
onclick=""
```

### Expression Evaluation

```javascript
eval(calculation)
```

---

## 💻 Program Logic

### Build Expression

```javascript
updateCalculation('1');
updateCalculation(' + ');
updateCalculation('2');
```

Result:

```text
1 + 2
```

### Calculate Result

```javascript
calculation = eval(calculation);
```

Output:

```text
3
```

### Clear Calculator

```javascript
calculation = '';
```

---

## 🚀 Learning Outcome

Through this project I learned:

- Creating reusable functions
- Handling button click events
- Building calculator logic
- Updating variables dynamically
- Evaluating mathematical expressions

---

## 🌟 Project Goal

To build a functional calculator interface and understand how JavaScript can process user input and perform calculations.

---

## 📂 Project Structure

```bash
Day-51-JavaScript-Basic-Calculator
│
├── index.html
└── README.md
```

---

✅ Day 51 Completed
