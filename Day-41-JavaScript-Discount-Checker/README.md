# Day 41 – JavaScript Discount Eligibility Checker 🎟️

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

A simple JavaScript project that checks whether a person is eligible for a discount based on age and holiday status.

The program uses logical operators and conditional statements to determine discount eligibility.

---

## 🎯 Features

- Age-based discount checking
- Holiday condition validation
- Logical Operators practice
- Real-world decision-making logic
- Beginner-friendly JavaScript project

---

## 🛠 Tech Stack

- HTML5
- JavaScript (ES6)

---

## 📚 Concepts Practiced

### Variables

```javascript
const age = 5;
const isHoliday = true;
```

### Conditional Statements

```javascript
if (...) {
}
else {
}
```

### Logical Operators

#### OR Operator

```javascript
||
```

Checks if at least one condition is true.

#### AND Operator

```javascript
&&
```

Checks if all conditions are true.

#### NOT Operator

```javascript
!
```

Reverses a boolean value.

---

## 💻 Program Logic

### Discount Rules

Eligible for discount when:

- Age is 6 or below
- OR Age is 65 or above

```javascript
age <= 6 || age >= 65
```

### Holiday Rule

Discount is only available when it is NOT a holiday.

```javascript
(age <= 6 || age >= 65) && !isHoliday
```

---

## 🚀 Learning Outcome

Through this project I learned:

- Using OR (||) conditions
- Combining multiple logical operators
- Understanding operator precedence
- Working with Boolean values
- Building real-life condition-based programs

---

## 🌟 Project Goal

To understand JavaScript logical operators and create a simple discount eligibility checker using real-world conditions.

---

✅ Day 41 Completed
