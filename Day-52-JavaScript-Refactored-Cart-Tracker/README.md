# Day 52 – JavaScript Refactored Cart Tracker 🛒⚡

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

An improved and optimized version of the Shopping Cart Quantity Tracker.

Instead of writing separate logic for every button, this project uses a reusable function that handles all cart updates dynamically.

This approach reduces code duplication and improves maintainability.

---

## 🎯 Features

- Show current cart quantity
- Add items to cart
- Increase quantity by +2, +3, +4, +5
- Remove items from cart
- Decrease quantity by -2 and -3
- Reset cart functionality
- Maximum cart limit validation
- Minimum cart limit validation
- Reusable update function
- Cleaner and optimized code structure

---

## 🛠 Tech Stack

- HTML5
- JavaScript (ES6)

---

## 📚 Concepts Practiced

### Functions

```javascript
function updateCartQuantity(change)
```

### Parameters

```javascript
change
```

### Conditional Statements

```javascript
if
return
```

### Variables

```javascript
let cartQuantity = 0;
```

### Arithmetic Operators

```javascript
+=
```

---

## 💻 Program Logic

### Reusable Cart Function

```javascript
function updateCartQuantity(change)
```

Handles:

- Adding items
- Removing items
- Validation checks

### Maximum Limit Validation

```javascript
if (cartQuantity + change > 10)
```

Displays:

```text
The cart is full
```

### Minimum Limit Validation

```javascript
if (cartQuantity + change < 0)
```

Displays:

```text
Not enough items in the cart
```

### Update Quantity

```javascript
cartQuantity += change;
```

---

## 🚀 Learning Outcome

Through this project I learned:

- Code refactoring techniques
- Function reusability
- Avoiding duplicate code
- Cleaner program structure
- Better JavaScript practices
- Parameterized functions

---

## 🌟 Project Goal

To improve an existing cart application by converting repetitive logic into a reusable and maintainable function.

---

## 📂 Project Structure

```bash
Day-52-JavaScript-Refactored-Cart-Tracker
│
├── index.html
└── README.md
```

---

✅ Day 52 Completed
