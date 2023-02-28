class Wrestler{
  #name;
  #signature
  constructor(name, signature){
    this.#name = name
    this.#signature = signature
  }
  startHealthTick(){
    const startHealth = setInterval(() => {
      this.health -= 1, console.log(this.health)
      if(this.health <= 0 || this.relevancy <= 0){
        clearInterval(startHealth)
      }
    }, this.wrestlerTick)
  }
  startRelevancyTick(){
    const startRelevancy = setInterval(() => {
      this.relevancy -= 1, console.log(this.relevancy)
      if(this.relevancy <= 0 || this.health <= 0){
        clearInterval(startRelevancy)
      }
    }, this.wrestlerTick)

  }
  getName(){
    return this.#name
  }
  getSignature(){
    return this.#signature
  }
  getHealing(){
    this.health++
    if(this.health >= 10 && this.#signature == 'Cruiserweight'){
      this.health = 10
    }else if(this.health >= 15 && this.#signature == 'Middleweight'){
      this.health = 15
    }else if(this.health >= 20 && this.#signature == 'Heavyweight'){
      this.health = 20
    }
  }
  haveMatch(){
    this.health = this.health - 2
    this.relevancy = this.relevancy + 1
    if(this.relevancy >= 10 && this.#signature == 'Heavyweight'){
      this.relevancy = 10
    }else if(this.relevancy >= 15 && this.#signature == 'Middleweight'){
      this.relevancy = 15
    }else if(this.relevancy >= 20 && this.#signature == 'Cruiserweight'){
      this.relevancy = 20
    }
  }
}
class Cruiserweight extends Wrestler{
  constructor(name, signature, wrestlerTick){
    super(name, signature)
    this.health = 10
    this.relevancy = 20
    this.wrestlerTick = wrestlerTick
  }
}
class Middleweight extends Wrestler{
  constructor(name, signature, wrestlerTick){
    super(name, signature, wrestlerTick)
    this.health = 15
    this.relevancy = 15
    this.wrestlerTick = wrestlerTick
  }
}
class Heavyweight extends Wrestler{
  constructor(name, signature, wrestlerTick){
    super(name, signature)
    this.health = 20
    this.relevancy = 10
    this.wrestlerTick = wrestlerTick
  }
}

export {Cruiserweight}
export {Middleweight}
export {Heavyweight}


