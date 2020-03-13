class Villain extends Person {
    constructor() {
        super(name);
    }

    render() {
        // Outputs HTML of Villain data, will use simple bootstrap card here
        return `
            <div class="card col-4">
                <img src="" class="card-img-top" alt="Some Person">
                <div class="card-body">
                    <p>Health: ${this.health}</p>
                    <p>Weapon: ${this.weapon}</p>
                </div>
            </div>           
        `
    }
}