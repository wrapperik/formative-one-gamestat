# Technical Description

## Application Overview

This app is a React-based data visualization application that allows users to explore and compare video games using data provided by the RAWG API. The app enables users to view details of individual games, compare two games side by side, and explore a timeline of top-rated or trending games.

The project was developed using:

* React (frontend framework)
* RAWG API (for game data)
* React Router (page routing)
* Bootstrap CSS (styling)

## API Integration

The app consumes data from the RAWG REST API ([https://rawg.io/apidocs](https://rawg.io/apidocs)), which returns rich game metadata including:

* Game name and release date
* Metacritic scores
* Game Screenshots
* Tags and genres
* Game descriptions

## Visualizations

The app presents data-rich UI elements that guide user interactions, including:

* Card-based display of games&#x20;
* A timeline page that shows a game card and release date chart
* A comparison layout for reviewing two games side by side
* Charts rendered by Chart.js

## Component Structure

Main components include:

* `App.js`: Sets up routing between pages
* `Home.js`: Displays a list of top games using cards
* `Timeline.js`: Displays data for individual games and visualizes their release dates in a timeline format
* `ComparePage.js`: Allows users to select and compare two different games
* `GameCard.js`: Reusable component for showing game info

## Assumptions & Limitations

* The app assumes RAWG API is operational and returns complete data; no fallback for missing or partial data is implemented.
* Mobile responsiveness is partially implemented; best experienced on desktop.
* No user authentication or personalized data is included—public data only.

## Pages

### Home Page

This page features an about section and a search bar. The about section introduces the purpose of the app, and the search functionality allows users to look up specific games using the RAWG API.

---

### Timeline Page

Displays data for individual games and visualizes their release dates in a timeline format

---

### Comparison Page

This page allows users to select two games and compare their details side by side. The comparison includes name, ratings, genres, descriptions and charts.
