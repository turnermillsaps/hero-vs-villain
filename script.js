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

-----------------------------------------------------------
    Issues:
    Enhancements:
        - Give indication that name and weapon have been added
-----------------------------------------------------------
*/


/*   Create Hero and Villain Objects   */

// Instantiate global hero and villain variables
let hero;
let villain;
let heroWeapon;
let villainWeapon;

// Event listener for input fields to create new Hero and Villain objects
document.getElementById('submit-hero-name').addEventListener('click', function(){
    hero = new Hero(`${document.getElementById('hero-name-input').value}`);
    console.log(hero);
})
document.getElementById('submit-villain-name').addEventListener('click', function(){
    villain = new Villain(`${document.getElementById('villain-name-input').value}`);
    console.log(villain);
})

// Event listeners for the Hero and Villain's weapons
document.getElementById('submit-hero-weapon').addEventListener('click', function(){
    heroWeapon = new Weapon(`${document.getElementById('hero-weapon-input').value}`);
    hero.equipWeapon(heroWeapon);
    console.log(hero);
})
document.getElementById('submit-villain-weapon').addEventListener('click', function(){
    villainWeapon = new Weapon(`${document.getElementById('villain-weapon-input').value}`);
    villain.equipWeapon(villainWeapon);
    console.log(villain);
})


// Create the render function to bring each player to the screen
let renderPlayers = () => {
    document.getElementById('player-row').appendChild(hero.render());
    document.getElementById('player-row').appendChild(villain.render());
}