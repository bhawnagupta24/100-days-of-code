# Day 32 – JavaScript Profile Card Popup Animation 💫🖤

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

A simple interactive profile card that slides down when a button is clicked and hides again when the close icon is pressed.

This project focuses on:
- JavaScript DOM manipulation
- Click event handling
- CSS transform animations
- Smooth popup transitions

---

## 🎯 Features

- Hidden card by default (translateY animation)
- Button click → Card slides down
- Close icon click → Card slides up
- Smooth transition effect
- Centered layout
- Clean minimal UI
- Profile image with description

---

## 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- CSS Transform
- CSS Transition
- Remix Icons

---

## 🧠 What I Practiced

- document.querySelector()
- getElementById()
- addEventListener()
- Handling click events
- Manipulating inline styles with JS
- translateY animation logic
- Basic UI interaction control

---

## 📂 Project Structure

---

## 🚀 How It Works

1. The card is initially hidden using:
   transform: translateY(-620px);

2. When the button is clicked:
   JS changes transform to translateY(0)

3. When the close icon is clicked:
   JS resets transform back to translateY(-620px)

Smooth transition is handled using CSS:
transition: transform 1s ease;

---

## 🎓 Learning Outcome

This project helped me understand:

- How JS interacts with CSS
- How animations can be controlled dynamically
- How to build interactive UI components
- How to structure small JS-based frontend projects

---

✅ Day 32 Completed
