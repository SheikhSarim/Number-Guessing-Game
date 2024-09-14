
Project Title: **Number Guessing Game**
---------------------------------------

### Description:

The Number Guessing Game is a simple web-based game where players attempt to guess a randomly generated number within a range determined by the difficulty level they select. The game provides feedback on whether the guess is too high or too low and tracks the number of attempts remaining. Players win if they guess the correct number before exhausting their maximum allowed guesses.

### Features:

1. **Difficulty Levels**:
    
    * The player selects a difficulty level, which determines the range of possible numbers.
    * The game generates a random number within this range.
2. **Player Input**:
    
    * Players *enter** their guess into a form.
    * Guesses are validated to ensure they fall within the range of allowed numbers, aren't repeated, and are positive integers.
3. **Feedback Mechanism**:
    
    * For each guess, the player is informed whether their guess is too high, too low, or correct.
    * If the guess is correct, a victory message is displayed using a modal.
4. **Guess Tracking**:
    
    * Previous guesses are displayed as a list.
    * The number of remaining guesses is shown to the player.
5. **Win and Lose Conditions**:
    
    * Players win if they guess the number within the allowed attempts.
    * If the player fails to guess correctly after using all attempts, the correct number is revealed, and a game-over modal is displayed.
6. **Bootstrap Modals**:
    
    * The game utilizes Bootstrap modals for:
        * Displaying victory messages.
        * Showing instructions.
        * Indicating game over.

### Files Structure:

* `index.html`: The main HTML page containing the UI elements and modals.
* `style.css`: Custom styles for game components.
* `script.js`: Contains the core game logic, including random number generation, input validation, guess checking, and game flow.

### Game Logic Overview:

* **Random Number Generation**: Based on the selected difficulty, the game generates a random number between 1 and the difficulty value.
    
* **Validation**:
    
    * The player's guess is validated to ensure:
        * It is within the allowed range.
        * It is a positive number.
        * It hasn’t been guessed before.
    * Invalid guesses trigger feedback to the player via error messages.
* **Guess Feedback**:
    
    * If the guess is too high or too low, the game provides appropriate feedback.
    * When a correct guess is made, a victory modal is shown, and the game ends.
* **Game Over**:
    
    * If the player fails to guess the number within the maximum attempts, the game ends, and the correct number is revealed in a modal.

### How to Play:

1. Select a difficulty level to set the range for guessing.
2. Enter your guess in the input field.
3. Press the "Submit" button to see if your guess is correct.
4. The game will provide feedback on whether your guess is too high, too low, or correct.
5. You have a limited number of guesses to find the correct number.
6. After a correct guess or exhausting the allowed guesses, the game ends.

### Technologies Used:

* **HTML**: For the basic structure of the game interface.
* **CSS**: For styling and layout.
* **JavaScript**: For game logic and interactivity.
* **Bootstrap**: For responsive design and modals.

### Dependencies:

* Bootstrap (v5.3.0): For UI components such as modals and form validation.

### Future Enhancements:

* Add different difficulty modes that affect the total number of guesses.
* Add a leaderboard to track top players with the least guesses.

### Credits:

* Developed by [Sheikh Sarim].
