console.log("Welcome to the main module")

import { createPlan } from './plan.js'

// let parentHTMLElement = document.querySelector(".plan")
// parentHTMLElement.innerHTML = createPlan()

const yearlyPlan = createPlan()

// import { createAsparagus } from "./seeds/asparagus.js"
// import { createCorn } from './seeds/corn.js'
// import { createPotato } from './seeds/potato.js'
// import { createSoybean } from './seeds/soybean.js'
// import { createSunflower } from './seeds/sunflower.js'
// import { createWheat } from './seeds/wheat.js'

import { plantSeeds } from './tractor.js'
plantSeeds(yearlyPlan)

import { addPlant } from './field.js'
import { usePlants } from './field.js'
const usePlant = usePlants()
console.log(usePlant)

import { harvestPlants } from "./harvester.js"
import { field } from "./field.js"
const theHarvest = harvestPlants(field)
console.log(theHarvest)

import { catalog } from "./catalog.js"

let parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = catalog(theHarvest)
