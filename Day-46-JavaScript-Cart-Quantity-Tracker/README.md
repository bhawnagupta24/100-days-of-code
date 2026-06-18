# Day 46 – JavaScript Cart Quantity Tracker 🛒

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

A simple shopping cart quantity tracker built using JavaScript.

Users can:
- Add items to the cart
- Remove items from the cart
- Increase quantity by multiple values
- Reset the cart
- Prevent the cart from exceeding its maximum limit

This project focuses on variables, arithmetic operations, conditional logic, and user interaction.

---

## 🎯 Features

- Show current cart quantity
- Add items to cart
- Increase quantity by +2, +3, +4, +5
- Remove items from cart
- Decrease quantity by -2 and -3
- Reset cart quantity
- Maximum cart limit protection
- Alert message when cart is full

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

### Template Literals

```javascript
`Cart quantity: ${cartQuantity}`
```

### Alert Messages

```javascript
alert('The cart is full');
```

---

## 💻 Program Logic

### Add Items

```javascript
cartQuantity++;
cartQuantity += 2;
cartQuantity += 3;
cartQuantity += 4;
cartQuantity += 5;
```

### Remove Items

```javascript
cartQuantity--;
cartQuantity -= 2;
cartQuantity -= 3;
```

### Reset Cart

```javascript
cartQuantity = 0;
```

### Cart Limit Check

```javascript
if (cartQuantity + 1 > 10) {
  alert('The cart is full');
}
```

Prevents users from adding more than 10 items.

---

## 🚀 Learning Outcome

Through this project I learned:

- Managing application state using variables
- Updating values dynamically
- Implementing cart quantity logic
- Using conditions to prevent invalid actions
- Creating basic e-commerce functionality

---

## 🌟 Project Goal

To build a simple shopping cart quantity tracker and understand how JavaScript can manage user interactions and data updates.

---

✅ Day 46 Completed
