# Day 49 – JavaScript Temperature Converter 🌡️

Part of my **100 Days Frontend Development Challenge**.

---

## 📌 Project Overview

A JavaScript project that converts temperature values between Celsius and Fahrenheit using reusable functions.

The project demonstrates function creation, return statements, conditional logic, and temperature conversion formulas.

---

## 🎯 Features

- Celsius to Fahrenheit conversion
- Fahrenheit to Celsius conversion
- Reusable temperature conversion function
- Conditional unit checking
- Dynamic output generation
- Function-based programming

---

## 🛠 Tech Stack

- HTML5
- JavaScript (ES6)

---

## 📚 Concepts Practiced

### Function Declaration

```javascript
function convertToFahrenheit(celsius) {
}
```

### Return Statement

```javascript
return value;
```

### Parameters

```javascript
function convertTemperature(degrees, unit)
```

### Conditional Statements

```javascript
if
else if
```

### Template Literals

```javascript
`${result}F`
```

---

## 💻 Program Logic

### Celsius to Fahrenheit

Formula:

```text
(Fahrenheit = Celsius × 9/5 + 32)
```

Code:

```javascript
function convertToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
```

---

### Fahrenheit to Celsius

Formula:

```text
(Celsius = (Fahrenheit - 32) × 5/9)
```

Code:

```javascript
function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
```

---

### Universal Temperature Converter

```javascript
function convertTemperature(degrees, unit)
```

- If unit is `C` → Converts to Fahrenheit
- If unit is `F` → Converts to Celsius

---

## 🚀 Learning Outcome

Through this project I learned:

- Building reusable functions
- Using return statements
- Performing mathematical calculations
- Applying conditional logic
- Creating utility-based programs

---

## 🌟 Project Goal

To understand function reusability and create a temperature conversion utility using JavaScript.

---

✅ Day 49 Completed
