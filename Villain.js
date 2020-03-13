class Villain extends Person {
    constructor() {
        super(name);
    }

    render() {
        // Outputs HTML of Villain data, will use simple bootstrap card here
        return `
            <div class="card col-4">
                <img src="todd-howard-smile-celebrity-mask.png" class="card-img-top" alt="Some Person">
                <div class="card-body">
                    <p>Health: ${this.health}</p>
                    <p>Weapon: ${this.weapon}</p>
                    <button class="btn btn-danger" onclick="${this.attack(hero)}">Attack</button>
                </div>
            </div>           
        `
    }
}