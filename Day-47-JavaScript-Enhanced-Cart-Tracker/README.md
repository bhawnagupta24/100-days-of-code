# Day 47 – JavaScript Enhanced Cart Tracker 🛒✨

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

An improved version of the Cart Quantity Tracker built using JavaScript.

This project allows users to:

- Add items to the cart
- Remove items from the cart
- Increase or decrease quantity by multiple values
- Reset the cart
- Prevent quantity from exceeding the maximum limit
- Prevent quantity from going below zero

This simulates real-world shopping cart validation logic.

---

## 🎯 Features

- Show current cart quantity
- Add items to cart
- Increase quantity by +2, +3, +4, +5
- Remove items safely
- Decrease quantity by -2 and -3
- Reset cart functionality
- Maximum cart limit (10 items)
- Minimum cart limit (0 items)
- Alert messages for invalid actions

---

## 🛠 Tech Stack

- HTML5
- JavaScript (ES6)

---

## 📚 Concepts Practiced

### Variables

```javascript
let cartQuantity = 0;
```

### Arithmetic Operators

```javascript
++
--
+=
-=
```

### Conditional Statements

```javascript
if
else
```

### Alerts

```javascript
alert()
```

### Template Literals

```javascript
`Cart quantity: ${cartQuantity}`
```

---

## 💻 Program Logic

### Maximum Cart Validation

```javascript
if (cartQuantity + 1 > 10) {
  alert('The cart is full');
}
```

Prevents adding more than 10 items.

### Minimum Cart Validation

```javascript
if (cartQuantity - 1 < 0) {
  alert('Not enough items in the cart');
}
```

Prevents quantity from becoming negative.

### Reset Cart

```javascript
cartQuantity = 0;
```

Resets the cart to its initial state.

---

## 🚀 Learning Outcome

Through this project I learned:

- Input validation using conditions
- Managing cart state efficiently
- Preventing invalid operations
- Improving user experience
- Building practical e-commerce logic

---

## 🌟 Project Goal

To create a more realistic shopping cart system by implementing both maximum and minimum quantity validations.

---

✅ Day 47 Completed
