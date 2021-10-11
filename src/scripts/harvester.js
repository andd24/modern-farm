const harvest = []

export const harvestPlants = (plants) => {
    let output = ""
    let cornOutput = ""
    for (const plant of plants) {
        output = plant.output
        cornOutput = output / 2
        if (plant.type === "Corn") {
            for (let index = 0; index < cornOutput; index++) {
                harvest.push(plant)
            }
        }
        else {
            for (let index = 0; index < output; index++) {
                harvest.push(plant) 
            }
        }
    }
    return harvest
}


