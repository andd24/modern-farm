import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (rows) => {
    for (const row of rows) {
        for (const crop of row) {
            if (crop === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            else if (crop === "Corn") {
                const cornSeed = createCorn()
                for (const eachCornSeed of cornSeed){
                    addPlant(eachCornSeed)
                }
            }
            else if (crop === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            else if (crop === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if (crop === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if (crop === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
        }
    }

}