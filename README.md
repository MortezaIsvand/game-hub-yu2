# Game Hub


This project is a dynamic project powered by the rawg.io API, Zustand, React Query, and React Router DOM. It provides users with a seamless gaming experience, allowing them to explore, search, and view details of various games. The project efficiently manages state, making it easy for users to navigate and interact with different game features.

## Demo
- [game-hub-ls2.vercel.app]( https://game-hub-ls2.vercel.app)

## Technologies
- React
- Tailwind CSS
- Zustand
- React-query
- React-router-dom
- Vite

## Features

- **Game Search**: Users can search for their favorite games using the search bar. The search results are displayed in real-time, making it easy to find the desired game.

- **Game Details**: Users can view detailed information about each game, including the game's rating, release date, platforms, and description.

- **Genres and Platforms**: Users can filter games by genre and platform, enabling them to discover new games based on their interests.

- **Infinite scroll**: The project implements infinite scroll to efficiently handle large amounts of game data. Users can navigate through multiple pages of search results and explore a wide range of games.

- **Responsive Design**: The React Game Hub is built with a responsive design, ensuring that it looks and functions seamlessly across various devices and screen sizes.

## Installation

1. Clone the repository: `git clone https://github.com/mortezaisvand/game-hub-yu2.git`
2. Navigate to the project directory: `cd game-hub-yu2`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Configuration

To use the rawg.io API and access game data, you need to obtain an API key. Follow these steps to set up your API key:

1. Sign up for an account on [rawg.io](https://rawg.io/).
2. Once logged in, go to your account settings and navigate to the API Keys section.
3. Generate a new API key.
4. Copy the API key and paste it into the `.env` file in the root directory of the project: `REACT_APP_RAWG_API_KEY=YOUR_API_KEY`.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request. Make sure to follow the existing code style and guidelines.

