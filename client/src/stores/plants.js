import { ref } from 'vue'
import { defineStore } from 'pinia'

import PlantsService from '@/services/PlantsService'

export const usePlantStore = defineStore('plants', () => {
  const plants = ref([])

  async function loadPlants() {
    try {
      plants.value = (await PlantsService.index()).data
    } catch(e) {
      console.log(e)
    }
  }

  async function newPlant(plant) {
    try {
      await PlantsService.insert(plant)
      await loadPlants()
    } catch(e) {
      console.log(e)
    }
  }

  async function updatePlant(plant) {
    try {
      await PlantsService.update(plant)
      await loadPlants()
    } catch(e) {
      console.log(e)
    }
  }

  async function removePlant(plantId) {
    try {
      await PlantsService.delete(plantId)
      await loadPlants()
    } catch(e) {
      console.log(e)
    }
  }

  function findPlant(plantId) {
    return plants.value.find(p => p.id === plantId)
  }

  return { plants, loadPlants, newPlant, updatePlant, removePlant, findPlant }
})
