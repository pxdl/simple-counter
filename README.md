# React Simple Counter

This project is a simple counter application built with React. It includes a card that displays a count, which can be incremented, decremented, or reset using keyboard events.

## Features

- The count is displayed on a card.
- The count can be incremented by pressing the `Space` key.
- The count can be decremented by pressing the `Backspace` key.
- The count can be reset to zero by pressing the `R` key.
- The card changes its style when the count reaches 5, indicating that it's locked and can't be incremented further.

## Components

- `Card`: The main component that holds the state and handles the keyboard events.
- `Title`: A component that displays a title. It changes its content based on whether the card is locked or not.
- `Count`: A component that displays the current count.
- `ResetButton`: A component that resets the count to zero when clicked.
- `ButtonContainer`: A container for the buttons.

## Installation

1. Clone this repository: `git clone https://github.com/pxdl/react-simple-counter.git`
2. Navigate into the project directory: `cd react-simple-counter`
3. Install the dependencies: `npm install`
4. Start the application: `npm start`

## License

This project is licensed under the MIT License.
