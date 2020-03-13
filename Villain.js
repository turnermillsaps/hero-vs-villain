class Villain extends Person {
    constructor() {
        super(name, health, weapon);
    }

    render() {
        // Outputs HTML of Villain data, will use simple bootstrap card here
        return `
            <div class="card">
                <div class="card-body">Health: ${this.health}</div>
            </div>           
        `
    }
}