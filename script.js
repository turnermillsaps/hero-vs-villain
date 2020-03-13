/*
-----------------------------------------------------------
    Logic:
        - take user input for names for villain and hero
            - create new Hero and Villain objects
        - create two new weapons and equip them to each
        - two buttons, one for each, that will attack the other
        - when health goes below 1 for Hero, show "Game Over"
        - when health goes below 1 for Villain, show "Victory"
-----------------------------------------------------------
*/


/*   Create Hero and Villain Objects   */

// Instantiate global hero and villain variables
var hero;
var villain;

// Event listener for input fields to create new Hero and Villain objects
document.getElementById('submit-hero-name').addEventListener('click', function(){
    hero = new Hero(`${document.getElementById('hero-input').value}`);
    console.log(hero);
})
document.getElementById('submit-villain-name').addEventListener('click', function(){
    hero = new Villain(`${document.getElementById('villain-input').value}`);
    console.log(villain);
})

