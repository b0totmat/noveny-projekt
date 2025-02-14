<template>
    <main class="container">
    <div class="row gy-3">
      <div class="col-12 col-md-6 col-lg-4 mx-auto border p-3">
        <form>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="plant-name" placeholder="Tulipán" v-model="plant.name">
                <label for="plant-name" class="form-label">Növény neve</label>
            </div>
            <div class="form-check mb-2">
                <label for="is-perennial-yes" class="form-check-label">Évelő</label>
                <input type="radio" id="is-perennial-yes" :value="true" class="form-check-input" v-model="plant.isPerennial">
            </div>
            <div class="form-check mb-2">
                <label for="is-perennial-no" class="form-check-label">Nem évelő</label>
                <input type="radio"id="is-perennial-no" :value="false" class="form-check-input" v-model="plant.isPerennial">
            </div>
            <div class="mb-2">
                <select class="form-select" v-model="plant.type">
                    <option value="virág">Virág</option>
                    <option value="fa">Fa</option>
                    <option value="bokor">Bokor</option>
                </select>
            </div>
            <div class="form-floating mb-3">
                <input type="number" id="price" class="form-control" placeholder="2500" v-model="plant.price">
                <label for="price" class="form-label">Ár</label>
            </div>
            <button class="btn btn-success w-100" @click="newPlant">Hozzáadás</button>
        </form>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePlantStore } from '@/stores/plants'

const plantStore = usePlantStore()
const route = useRoute(),
      router = useRouter()

const plant = ref({
    name: '',
    isPerennial: false,
    type: 'virág',
    price: 1000
})

async function newPlant(e) {
    e.preventDefault()
    
    await plantStore.newPlant(plant.value)
    router.push({ name: 'home' })
}
</script>