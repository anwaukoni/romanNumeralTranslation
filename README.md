This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start` - Run client side of app

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `node server/server.js` - Run server side of app

This runs the server side of app that API fetches from.

Any changes made to the server side part of code requires a manual reload of server.

### Approach
#### Components
- Tried to create modular and composable component to handle rendering the translator components.
- The `RenderTranslator` component is easily duplicated on the `App.js` in order for numbers to be converted to Roman Numerals and vice versa
- If the UI also wished to be tested in the future, the composition of the components makes it easier to test in isolation.
- Also made it responsive to a certain degree; however, media queries may be required to improve this aspect of the app

#### Logic for translations - Translator.js
- Translating numbers to Roman Numerals was the easier of the two functions to create.
- You can divide each query into digits at the specific position they are in. IE: single, tenth, hundreth, and thousandth.
- Example If the digit at hundreth place is `8`, then you can return `DCCC`.
- You can continue to repeat this because until you get to get to the single unit.
- This is quite performant because there is no looping through the numbers, it is a straight lookup based on the list provided. In short, it takes a constant time regardless of the query.

- Translating Roman Numerals was trickier because there are a lot edge cases to deal with
- The logic involves mathemically adding each number in the Roman Numeral list. Starting with 0, you add the highest number in the list and continue doing that until you get to the lowest number.
- In cases that you have to deal with numbers like `IV`, a subtraction of `1` and an addition of `5` is made.
- There were also other edge case to deal with. Ex: 
 -- Query is not roman numeral? ex. `Cat`
 -- Query is above or below max and min numbers? ex. `9000`
 -- Query is in mapping but is not valid roman numeral? ex `XLLLLV`
- These edge cases meant that I had to create a more extensive hash map to store key value pairs and also keep track of the order of the strings to make sure the correct order is presevered.
- The  translation function for Roman Numerals to numbers covers a lot of edge cases but it could definitely me made more robust


### Potential Modifications for the Future
- Testing for the logic of the translations. This is especially useful to cover the hard-to-notice edge cases.
- CSS could have been put in its own module for more readable code.
- React hooks could have been used in UI so we can use stateless components