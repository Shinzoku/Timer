# Timer Application

## Introduction

This project is a simple timer application built using HTML, CSS, and JavaScript. It features a user-friendly interface that allows users to start, stop, and reset a timer. The application displays elapsed time in the format `hh:mm:ss` and provides basic controls for timer management.

## Project Structure

The project consists of the following files:

- `index.html`: The HTML file defines the structure of the application, including the timer display and control buttons.
- `styles.css`: The CSS file provides styling to make the application visually appealing. It centers the content and styles the buttons.
- `script.js`: The JavaScript file manages the timer functionality.

## Fonctionnality

1. **Start the Timer**: Click the "Start" button to begin timing. The timer will start counting from `00:00:00`.
2. **Stop the Timer**: Click the "Stop" button to pause the timer. The elapsed time will be preserved.
3. **Reset the Timer**: Click the "Reset" button to stop and reset the timer to `00:00:00`.

## Usage

1. Clone the repository or download the files.

    + SSH

    ```bash
        git clone git@github.com:Shinzoku/Timer.git
    ```
    
    + HTTPS

    ```bash
        git clone https://github.com/Shinzoku/Timer.git
    ```

2. Open index.html in a web browser.

## Explanation

- **JavaScript functionality**:
  - `formatTime(ms)`: Formats the elapsed milliseconds into `hh:mm:ss`.
  - `updateTimer()`: Updates the timer display every second if the timer is running.
  - `startTimer()`: Starts the timer and sets an interval to update the display.
  - `stopTimer()`: Stops the timer and saves the elapsed time.
  - `resetTimer()`: Resets the timer and clears any ongoing intervals.

Event listeners are attached to the buttons to handle user interactions.

## Author

This project was created by [Nicolas Bernon](mailto:nicolas.bernon62@gmail.com). 

## License

This project is licensed under the MIT License. See the [LICENSE](LICENCE.txt) file for details.

