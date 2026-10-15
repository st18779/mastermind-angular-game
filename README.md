# Bool Pgiaa

Bool Pgiaa is a browser-based logic game inspired by the classic Mastermind-style code-breaking challenge. The game is built with Angular and is designed to be played directly in the browser.

## What the project contains

This project is a front-end web game with the following structure:

- `src/app/components/game` – main game board and win/lose flow
- `src/app/components/line` – each guess row and interaction logic
- `src/app/components/result` – feedback evaluation after each guess
- `src/app/components/colors` – color selection panel
- `src/app` – top-level Angular app setup and page shell
- `public` and `src/styles.css` – global styling and app assets

The game randomly generates a secret sequence of 4 colors from a set of 6 available colors, and the player must deduce the exact order within 10 attempts.

## Purpose

The goal of the project is to provide a simple, interactive, and fun logic game that:

- challenges the player to reason about color patterns
- teaches deduction through trial and error
- demonstrates Angular component-based UI development
- works as a lightweight standalone browser game without needing a backend

## How to play

1. Open the app in your browser.
2. A secret sequence of 4 colors is generated randomly.
3. Choose one of the colors from the palette.
4. Click a slot in the current row to place the color.
5. Continue filling all 4 positions in the guess row.
6. Press the `סימתי` button to submit your guess.
7. The game gives feedback for that attempt:
   - Yellow: correct color in the correct position
   - Red: correct color but wrong position
   - Empty/white: color is not in the secret sequence
8. Use the feedback to refine your next guess.
9. You win if you correctly guess all 4 colors in the correct positions before running out of turns.
10. If you fail all 10 attempts, the game ends and you can start a new round.

## Rules summary

- 4 hidden colors
- 6 possible colors to choose from
- 10 attempts maximum
- repeated colors are allowed
- each guess must be completed before submitting

## Run locally

Make sure you have Node.js and npm installed, then run:

```bash
npm install
npm start
```

Or, if you prefer:

```bash
ng serve
```

Then open:

```text
http://localhost:4200/
```

## Build for production

```bash
npm run build
```

This generates the production build in the `dist/` folder.

## Project stack

- Angular
- TypeScript
- HTML
- CSS

## Notes

This project is a self-contained client-side game and does not connect to a database or server. It is meant to be a simple and visually interactive puzzle game that can be run locally in a browser.
