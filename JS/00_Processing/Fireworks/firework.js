function Firework() {
    this.firework = new Particle(random(width), windowHeight, true)
    this.exploded = false
    this.particles = []

    this.update = () => {
        if (!this.exploded) {
            this.firework.applyForce(gravity)
            this.firework.update()

            if (this.firework.vel.y >= 0) {
                this.exploded = true
                this.explode()
            }
        }
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].applyForce(gravity)
            this.particles[i].update()
        }
    }

    this.explode = () => {
        for (let i = 0; i < 100; i++) {
            var p = new Particle(this.firework.pos.x, this.firework.pos.y, false)
            this.particles.push(p)
        }
    }



    this.show = () => {
        if (!this.exploded) {
            this.firework.show()
        }
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].show()
        }
    }
}