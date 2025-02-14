import express from 'express'
import PlantController from '../controllers/PlantController.js'

const router = express.Router()

router.get('/', PlantController.getPlants)
router.post('/', PlantController.insertPlant)
router.put('/:id', PlantController.updatePlant)
router.delete('/:id', PlantController.removePlant)

export { router as plantRouter }
