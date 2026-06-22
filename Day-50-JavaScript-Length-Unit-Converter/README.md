# Day 50 – JavaScript Length Unit Converter 📏

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

A JavaScript utility project that converts length values between different units:

- Kilometers (km)
- Miles (miles)
- Feet (ft)

The project uses reusable functions, conditional logic, mathematical calculations, and input validation to perform accurate conversions.

---

## 🎯 Features

- Kilometers to Miles conversion
- Miles to Kilometers conversion
- Kilometers to Feet conversion
- Miles to Feet conversion
- Feet to Kilometers conversion
- Feet to Miles conversion
- Same-unit conversion support
- Invalid unit detection
- Reusable conversion function

---

## 🛠 Tech Stack

- HTML5
- JavaScript (ES6)

---

## 📚 Concepts Practiced

### Functions

```javascript
function convertLength(length, from, to)
```

### Parameters

```javascript
length
from
to
```

### Conditional Statements

```javascript
if
else if
else
```

### Return Statements

```javascript
return value;
```

### Input Validation

```javascript
if (from !== 'km' && from !== 'miles' && from !== 'ft')
```

---

## 💻 Supported Conversions

### Kilometers ↔ Miles

```text
1 mile = 1.6 km
```

### Kilometers ↔ Feet

```text
1 km = 3281 ft
```

### Miles ↔ Feet

```text
1 mile = 5280 ft
```

---

## 🚀 Program Logic

### Example

```javascript
convertLength(50, 'miles', 'km');
```

Output:

```text
80 km
```

### Validation Example

```javascript
convertLength(5, 'lbs', 'lbs');
```

Output:

```text
Invalid unit: lbs
```

---

## 🎓 Learning Outcome

Through this project I learned:

- Creating reusable utility functions
- Performing mathematical conversions
- Working with multiple conditions
- Handling invalid user input
- Improving program reliability

---

## 🌟 Project Goal

To build a flexible length conversion tool that supports multiple measurement units and validates incorrect inputs.

---

✅ Day 50 Completed 🎉

Halfway through the 100 Days Frontend Development Challenge!
