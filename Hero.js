// Create the Hero class

class Hero extends Person {
    constructor(name) {
        super(name);
    }

    
    render() {
        // Outputs HTML of Hero data, will use simple bootstrap card here
        return `
            <div class="card col-4">
                <img src="Caius_Cosades.png" class="card-img-top" alt="Some Person">
                <div class="card-body">
                    <p>Health: ${this.health}</p>
                    <p>Weapon: ${this.weapon}</p>
                    <button class="btn btn-danger" onclick="${this.attack(villain)}">Attack</button>
                </div>
            </div>
        `
    }
}