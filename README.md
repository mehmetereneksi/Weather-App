# Weather App 🌤️

A clean, interactive weather application built with HTML, CSS, and Vanilla JavaScript. It fetches real-time weather data for major cities using the Fetch API and displays detailed meteorological metrics alongside a dynamic, CSS-powered wind direction compass.

## ✨ Features

- **Real-Time Weather Data:** Fetches live weather information asynchronously using `async/await` and the Fetch API.
- **City Selection:** Includes a dropdown menu to check the weather in 6 major cities (*New York, Los Angeles, Chicago, Paris, Tokyo, and London*).
- **Comprehensive Metrics:** Displays current temperature, "feels like" temperature, weather condition with an icon, humidity, wind speed, and wind gusts.
- **Dynamic Wind Compass:** A custom-built pure CSS compass whose arrow smoothly rotates (`transform: rotate()`) to match the exact wind direction in degrees.
- **Graceful Error Handling & Fallbacks:** Uses optional chaining (`?.`) to safely display `"N/A"` for any missing API fields and handles network/API errors cleanly with `try/catch`.

## 🚀 Demo

[Live Demo](https://mehmetereneksi.github.io/Weather-App/)

## 🛠️ Technologies Used

- **HTML5:** Semantic structure and form controls (`<select>`, `<button>`).
- **CSS3:** Flexbox, CSS Grid, custom compass styling, and smooth CSS transitions/transforms.
- **JavaScript (ES6+):** Fetch API, `async/await`, DOM manipulation, optional chaining, and error handling.

## 📁 Project Structure

```text
├── index.html    # Main document containing the weather card, compass, and city selector
├── styles.css    # Stylesheet for layout, card UI, and the CSS wind compass
└── script.js     # Logic for API fetching, DOM updates, and compass rotation
```
