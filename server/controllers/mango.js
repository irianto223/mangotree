class MangoTree {

  constructor() {
    this.age = 0
    this.height = 0
    this.fruits = []
    this.healthy = true
  }

  grow() {
    if (this.age < 10) {
      this.age ++
      this.height += Math.random()*2
    }
    else {
      this.healthy = false
    }
  }

  produce() {
    if (this.healthy) {
      let random = Math.ceil(Math.random()*15)
      for (let i=0; i<random; i++) {
        this.fruits.push(new Mango())
      }
    }
  }
}

class Mango {
  constructor() {
    // this.weight = this.randomWeight()
    this.quality = this.randomQuality()
  }

  randomQuality() {
    let random = Math.floor(Math.random() * 2)
    if (random == 1) {
      return 'good'
    }
    else {
      return 'bad'
    }
  }

  randomWeight() {
    return Math.random() * 3
  }
}

module.exports = MangoTree
