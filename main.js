import {Cruiserweight} from './modules/modulo.js'
import {Middleweight} from './modules/modulo.js'
import {Heavyweight} from './modules/modulo.js'

const submitButton = document.getElementById('submitButton')
const div = document.getElementById('dd')

submitButton.addEventListener('click', (event)=> {
  event.preventDefault()
  const weightClass = document.getElementById('weightclass')
  const nameInput = document.getElementById('name')
  if(nameInput.value == ''){
    alert("please enter a name")
  }else{

    if(weightClass.value == 'Cruiserweight'){
      let wrestler = new Cruiserweight(nameInput.value, weightClass.value, 10000)
      wrestler.startHealthTick()
      wrestler.startRelevancyTick()
      const wrestlername = document.createElement('h1')
      const healingbutton = document.createElement('btn')
      healingbutton.innerHTML = '<button>heal the wrestler</button>'
      healingbutton.addEventListener('click', () => {
        wrestler.getHealing()
        console.log(wrestler.relevancy, wrestler.health)
        healingbutton.classList.add('inactive')
        setTimeout(() => {healingbutton.classList.remove('inactive')}, 5000)
      })
  
      const haveMatchButton = document.createElement('btn')
      
      
      haveMatchButton.innerHTML = '<button>have a match</button>'
      haveMatchButton.addEventListener('click', () =>{
        wrestler.haveMatch()
        haveMatchButton.classList.add('inactive')
        setTimeout(() => {haveMatchButton.classList.remove('inactive')}, 5000)
        console.log(wrestler.relevancy, wrestler.health)
      })
      
      function updateHealth(){
        const updateIntervalHealth = setInterval(() =>{
          wrestlerHp.innerText = `Health: ${wrestler.health}`
          if(wrestler.health <= 0){
            haveMatchButton.classList.add('dead')
            healingbutton.classList.add('dead')
            wrestlerDiv.classList.add('dead')
            console.log('dead')
            clearInterval(updateIntervalHealth)
          }
        }, 500)
      }
      function updateRelevancy(){
        const updateIntervalRelevancy = setInterval(() =>{
          wrestlerRelevancy.innerText = `Relevancy: ${wrestler.relevancy}`
          if(wrestler.relevancy <= 0 || wrestler.health <= 0){
            haveMatchButton.classList.add('dead')
            healingbutton.classList.add('dead')
            wrestlerDiv.classList.add('dead')
            console.log('dead')
            clearInterval(updateIntervalRelevancy)
          }
      }, 500)
      }
      let wrestlerRelevancy = document.createElement('p')
      let wrestlerHp = document.createElement('p')
      wrestlerRelevancy.innerText = `Relevancy: ${wrestler.relevancy}`
      wrestlerHp.innerText = `Health: ${wrestler.health}`
      const wrestlerDiv = document.createElement('div')
      div.appendChild(wrestlerDiv)
      wrestlername.innerText = `${wrestler.getName()} the ${wrestler.getSignature()}`
      function randomRGB(){
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);
        let divBackground = 'rgb(' + R + ',' + G + ',' + B + ')'
        wrestlerDiv.style.backgroundColor = divBackground
      }
      randomRGB()
      wrestlerDiv.appendChild(wrestlername)
      wrestlerDiv.appendChild(wrestlerHp)
      wrestlerDiv.appendChild(wrestlerRelevancy)
      wrestlerDiv.appendChild(healingbutton)
      wrestlerDiv.appendChild(haveMatchButton)
      
      updateHealth();
      updateRelevancy();
      console.log(wrestler)
    }else if(weightClass.value == 'Middleweight'){
  
      let wrestler = new Middleweight(nameInput.value, weightClass.value, 8000)
      wrestler.startHealthTick()
      wrestler.startRelevancyTick()
      const wrestlername = document.createElement('h1')
      const healingbutton = document.createElement('btn')
      healingbutton.innerHTML = '<button>heal the wrestler</button>'
      healingbutton.addEventListener('click', () => {
        wrestler.getHealing()
        console.log(wrestler.relevancy, wrestler.health)
        healingbutton.classList.add('inactive')
        setTimeout(() => {healingbutton.classList.remove('inactive')}, 5000)
      })
      
      const haveMatchButton = document.createElement('btn')
      haveMatchButton.innerHTML = '<button>have a match</button>'
      haveMatchButton.addEventListener('click', () =>{
        wrestler.haveMatch()
        haveMatchButton.classList.add('inactive')
        setTimeout(() => {haveMatchButton.classList.remove('inactive')}, 5000)
        console.log(wrestler.relevancy, wrestler.health)
      })
      function updateHealth(){
        const updateIntervalHealth = setInterval(() =>{
          wrestlerHp.innerText = `Health: ${wrestler.health}`
          if(wrestler.health <= 0){
            haveMatchButton.classList.add('dead')
            healingbutton.classList.add('dead')
            console.log('dead')
            clearInterval(updateIntervalHealth)
          }
        }, 500)
      }
      function updateRelevancy(){
        const updateIntervalRelevancy = setInterval(() =>{
          wrestlerRelevancy.innerText = `Relevancy: ${wrestler.relevancy}`
          if(wrestler.relevancy <= 0 || wrestler.health <= 0){
            haveMatchButton.classList.add('dead')
            healingbutton.classList.add('dead')
            console.log('dead')
            clearInterval(updateIntervalRelevancy)
          }
      }, 500)
      }
      let wrestlerRelevancy = document.createElement('p')
      let wrestlerHp = document.createElement('p')
      wrestlerRelevancy.innerText = `Relevancy: ${wrestler.relevancy}`
      wrestlerHp.innerText = `Health: ${wrestler.health}`
      const wrestlerDiv = document.createElement('div')
      div.appendChild(wrestlerDiv)
      wrestlername.innerText = `${wrestler.getName()} the ${wrestler.getSignature()}`
  
      wrestlerDiv.appendChild(wrestlername)
      wrestlerDiv.appendChild(wrestlerHp)
      wrestlerDiv.appendChild(wrestlerRelevancy)
      wrestlerDiv.appendChild(healingbutton)
      wrestlerDiv.appendChild(haveMatchButton)

      function randomRGB(){
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);
        let divBackground = 'rgb(' + R + ',' + G + ',' + B + ')'
        wrestlerDiv.style.backgroundColor = divBackground
      }
      randomRGB()
      
      updateHealth();
      updateRelevancy();
      console.log(wrestler)
      
    }else if(weightClass.value == 'Heavyweight'){
      let wrestler = new Heavyweight(nameInput.value, weightClass.value, 6000)
      wrestler.startHealthTick()
      wrestler.startRelevancyTick()
      const wrestlername = document.createElement('h1')
      const healingbutton = document.createElement('btn')
      healingbutton.innerHTML = '<button>heal the wrestler</button>'
      healingbutton.addEventListener('click', () => {
        wrestler.getHealing()
        console.log(wrestler.relevancy, wrestler.health)
        healingbutton.classList.add('inactive')
        setTimeout(() => {healingbutton.classList.remove('inactive')}, 5000)
      })
  
      const haveMatchButton = document.createElement('btn')
      
      haveMatchButton.innerHTML = '<button>have a match</button>'
      haveMatchButton.addEventListener('click', () =>{
        wrestler.haveMatch()
        haveMatchButton.classList.add('inactive')
        setTimeout(() => {haveMatchButton.classList.remove('inactive')}, 5000)
        console.log(wrestler.relevancy, wrestler.health)
      })
      function updateHealth(){
        const updateIntervalHealth = setInterval(() =>{
          wrestlerHp.innerText = `Health: ${wrestler.health}`
          if(wrestler.health <= 0){
            haveMatchButton.classList.add('dead')
            healingbutton.classList.add('dead')
            console.log('dead')
            clearInterval(updateIntervalHealth)
          }
        }, 500)
      }
      function updateRelevancy(){
        const updateIntervalRelevancy = setInterval(() =>{
          wrestlerRelevancy.innerText = `Relevancy: ${wrestler.relevancy}`
          if(wrestler.relevancy <= 0 || wrestler.health <= 0){
            haveMatchButton.classList.add('dead')
            healingbutton.classList.add('dead')
            console.log('dead')
            clearInterval(updateIntervalRelevancy)
          }
      }, 500)
      }
      let wrestlerRelevancy = document.createElement('p')
      let wrestlerHp = document.createElement('p')
      wrestlerRelevancy.innerText = `Relevancy: ${wrestler.relevancy}`
      wrestlerHp.innerText = `Health: ${wrestler.health}`
      const wrestlerDiv = document.createElement('div')
      div.appendChild(wrestlerDiv)
      wrestlername.innerText = `${wrestler.getName()} the ${wrestler.getSignature()}`
      function randomRGB(){
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);
        let divBackground = 'rgb(' + R + ',' + G + ',' + B + ')'
        wrestlerDiv.style.backgroundColor = divBackground
      }
      randomRGB()
  
      wrestlerDiv.appendChild(wrestlername)
      wrestlerDiv.appendChild(wrestlerHp)
      wrestlerDiv.appendChild(wrestlerRelevancy)
      wrestlerDiv.appendChild(healingbutton)
      wrestlerDiv.appendChild(haveMatchButton)
      
      updateHealth();
      updateRelevancy();
      console.log(wrestler)
    
  }
  }
})
