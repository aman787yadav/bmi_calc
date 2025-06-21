# ⚖️ BMI Calculator App

A simple and responsive **BMI (Body Mass Index) Calculator** built using **React.js**.  
This app allows users to enter their **weight** and **height**, and calculates their BMI along with a basic health classification (e.g., Underweight, Normal, Overweight, Obese).

Perfect for beginners learning React, state management, and event handling!

---

## 🚀 Features

- 📥 Input fields for height (in cm) and weight (in kg)
- 📊 Instant BMI calculation on button click
- 🧠 Health classification based on BMI result
- 🔁 Clear/reset input and result
- 📱 Responsive and user-friendly design

---

## 💻 Tech Stack

- **React.js** – Frontend UI framework
- **CSS** / **Tailwind CSS** *(optional)* – Styling
- **Vite** / **Create React App** *(any build tool)*

---

## 🛠️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bmi-calculator-react.git
cd bmi-calculator-react
2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Run the App Locally
bash
Copy
Edit
npm run dev
# or
yarn dev
Visit http://localhost:5173 to use the app.

📁 Folder Structure (Basic)
css
Copy
Edit
src/
├── components/
│   └── BMICalculator.jsx
├── App.jsx
├── main.jsx
├── styles.css
📐 BMI Formula
BMI
=
Weight (kg)
(
Height (cm)
100
)
2
BMI= 
( 
100
Height (cm)
​
 ) 
2
 
Weight (kg)
​
 
BMI Categories:
Underweight: BMI < 18.5

Normal weight: 18.5 ≤ BMI < 24.9

Overweight: 25 ≤ BMI < 29.9

Obese: BMI ≥ 30
