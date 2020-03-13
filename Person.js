// Create the Person class

class Person {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapon;
    }

    equipWeapon(weapon) {
        this.weapon = weapon;
    }

    attack(person) {
        person.health -= this.weapon.damage;
    }
}