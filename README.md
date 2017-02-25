# HW - Crystals Collector Game
(remove this before publishing) It is best to prefix your Homework Names so that you may easily filter them out later when you may have actual projects that you are working on. It also important to let employers know that this was only a hw assignment and not your personal work. (ex. hw_giph-tastic)

## Live Link (If relevant)
 - www.example.com

## Description on how to use the app


## Requirements
#### Add a simple description of what the HW requirements were

- There will be four crystals displayed as buttons on the page.
- The player will be shown a random number at the start of the game.
- When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
- Your game will hide this amount until the player clicks a crystal.
- When they do click one, update the player's score counter.
- The player wins if their total score matches the random number from the beginning of the game.
- The player loses if their score goes above the random number.
- The game restarts whenever the player wins or loses.
 - When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
- The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

## Technologies Used
#### Use bullets to list out the technologies used. For example,
- Jquery for Dom Manipulation
- AJAX for API GET requests

## Code Explaination
- Here, you can either provide a brief summary about your code and perhaps what you learned or you can go into specif detail about how you tackled certain tasks.
- Use code snippets for placing example code and then describing it
- Use subheaders to organize your thoughts
- This is the most important part as it will show other what your code does with out having to download the code. 
- In essense, this will also be a form of notes that you may later reference weeks later

-------------

##Here is an example of what a Readme could look like:

### AJAX Request to Giphy (Example)
I created a function that allowed me to make an AJAX request to the Giphy API and then allowed me to pass through a callback function in order to further process the JSON object that was returned. 

```
var settings = {
  "url": "http://api.giphy.com/v1/gifs/search?q=funny%20cat&api_key=dc6zaTOxFJmzC",
  "method": "GET"
  }
}
function getGiphyList(cb){
	$.ajax(settings).done(function (response) {
	  cb(response)
	});
}
```
