# NASA React App 🚀

## Project Overview 🌌
The **NASA React App** is a web application that retrieves data from NASA's API and displays it in an intuitive interface. The app leverages local storage to enhance performance and provide a seamless user experience.

## Features ✨

- **Core Concept**: Developed a web app using the Fetch API to retrieve NASA data and store it in an environment file.
- **Data Caching**: Implemented local storage to cache data for quicker access.
- **Real-Time Data**: Fetched data in real-time, with a fallback to local storage if data is already available.
- **Daily Updates**: Designed to fetch only one new piece of data per day to prevent performance slowdowns.
- **Fallback Logic**: Prioritized local storage data to maintain a consistent user experience.
- **User Interface**: Created an intuitive interface for easy data display.

## Technologies Used 🛠️

- **Frontend**: React, HTML, CSS
- **Backend**: Fetch API
- **Storage**: Local Storage

## Installation 💻

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nasa-react-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd nasa-react-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your NASA API key:
   ```env
   REACT_APP_NASA_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```bash
   npm start
   ```

## Usage 🌠

- Open the app in your browser at `http://localhost:3000`.
- The app will fetch data from NASA's API and store it in local storage for better performance.
- Each day, a new piece of data will be fetched and displayed. If the same data is already available, it will be retrieved from local storage.

## License 📜

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Feel free to contribute or suggest enhancements by creating a pull request or raising an issue! 💡
