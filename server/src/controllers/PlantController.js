import { Plant } from "../models"

async function getPlants(req, res) {
    try {
        const plants = await Plant.findAll()
        res.status(200).json(plants)
    } catch(e) {
        res.status(500)
    }
}

async function insertPlant(req, res) {
    try {
        const newPlant = await Plant.create(req.body);
        res.status(201).json({message: 'Sikeresen hozzáadta az új növényt.'})
    } catch(e) {
        res.status(500).json({message: 'Nem tudtunk új növényt felvenni.'})
    }
}

async function updatePlant(req, res) {
    try {
        const plant = Plant.findByPk(req.params.id)

        if(!plant) {
            res.status(404).json({message: 'Nem található növény.'})
        }

        plant.update(req.body)
        res.status(200).json({message: 'Sikeresen módosította a növényt.'})
    } catch(e) {
        res.status(500).json({message: 'Hiba a módosítás során.'})
    }
}

async function removePlant(req, res) {
    try {
        const plant = Plant.findByPk(req.params.id)

        if(!plant) {
            res.status(404).json({message: 'Nem található növény.'})
        }

        plant.destroy()
        res.status(204).json({message: 'Növény sikeresen törölve.'})
    } catch(e) {
        res.status(500).json({message: 'Nem tudtuk törölni a növényt.'})
    }
}

export { getPlants, insertPlant, updatePlant, removePlant }
