# Day 60 – JavaScript DOM Element Selection 🖱️

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

A beginner-friendly JavaScript project focused on learning how to access and modify HTML elements using the Document Object Model (DOM).

The project demonstrates selecting elements with `document.querySelector()` and updating their content dynamically using `innerHTML`.

---

## 🎯 Features

- Select HTML elements using CSS selectors
- Access DOM elements dynamically
- Update button text using JavaScript
- Practice DOM manipulation
- Beginner-friendly examples

---

## 🛠 Tech Stack

- HTML5
- JavaScript (ES6)

---

## 📚 Concepts Practiced

### DOM Selection

```javascript
document.querySelector('button');
```

Selects the first matching HTML element.

---

### Selecting by Class

```javascript
document.querySelector('.js-button');
```

Selects an element using its class name.

---

### Updating Content

```javascript
element.innerHTML = '9b done!';
```

Changes the content displayed inside an HTML element.

---

## 💻 Program Logic

### Select First Button

```javascript
console.log(document.querySelector('button'));
```

Displays the first button element in the browser console.

---

### Update Button Text

```javascript
document.querySelector('.js-button')
  .innerHTML = '9b done!';
```

Changes the second button text from:

```text
9b
```

to

```text
9b done!
```

---

## 🚀 Learning Outcome

Through this project I learned:

- Accessing HTML elements using JavaScript
- Selecting elements with CSS selectors
- Modifying page content dynamically
- Understanding the basics of DOM manipulation
- Building interactive web pages

---

## 🌟 Project Goal

To understand how JavaScript interacts with HTML elements using the DOM and dynamically updates webpage content.

---

## 📂 Project Structure

```bash
Day-60-JavaScript-DOM-Element-Selection
│
├── index.html
└── README.md
```

---

✅ Day 60 Completed
