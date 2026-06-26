# Day 54 – JavaScript Object Comparison 🔍

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

A JavaScript project focused on comparing objects using functions and conditional logic.

The project demonstrates how to:

- Compare product prices
- Return the cheaper product
- Compare object properties
- Check whether two objects represent the same product

This project introduces object comparison techniques used in real-world applications such as e-commerce systems.

---

## 🎯 Features

- Compare product prices
- Return the lower-priced product
- Compare object properties
- Check object equality
- Reusable comparison functions
- Boolean result generation

---

## 🛠 Tech Stack

- HTML5
- JavaScript (ES6)

---

## 📚 Concepts Practiced

### Object Creation

```javascript
const product = {
  name: 'basketball',
  price: 2095
};
```

### Function Parameters

```javascript
comparePrice(product1, product2)
```

### Object Property Access

```javascript
product.price
product.name
```

### Boolean Expressions

```javascript
return true;
return false;
```

### Logical AND Operator

```javascript
&&
```

---

## 💻 Program Logic

### Compare Product Prices

```javascript
function comparePrice(product1, product2) {
  if (product1.price < product2.price) {
    return product1;
  } else {
    return product2;
  }
}
```

Returns the product with the lower price.

---

### Compare Two Products

```javascript
function isSameProduct(product1, product2) {
  return (
    product1.name === product2.name &&
    product1.price === product2.price
  );
}
```

Returns:

- `true` if both products have the same name and price.
- `false` otherwise.

---

## 🚀 Learning Outcome

Through this project I learned:

- Comparing JavaScript objects
- Accessing object properties
- Returning objects from functions
- Working with Boolean values
- Building reusable comparison logic

---

## 🌟 Project Goal

To understand how objects can be compared using their properties and create reusable functions for comparison operations.

---

## 📂 Project Structure

```bash
Day-54-JavaScript-Object-Comparison
│
├── index.html
└── README.md
```

---

✅ Day 54 Completed
