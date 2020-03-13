// Create the Hero class

class Hero extends Person {
    constructor(name) {
        super(name);
    }

    
    render() {
        // Outputs HTML of Hero data, will use simple bootstrap card here
        return `
            <div class="card">
                <div class="card-body">Health: ${this.health}</div>
            </div>
        `
    }
}