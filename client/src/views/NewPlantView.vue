<template>
    <main class="container">
    <div class="row gy-3">
      <div class="col-12 col-md-6 col-lg-4 mx-auto border p-3">
        <form>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="plant-name" placeholder="Tulipán" v-model="plant.name">
                <label for="plant-name" class="form-label">Növény neve</label>
                <p class="bg-danger text-light p-2 mt-2 border border-dark rounded-pill opacity-75" v-if="errors.nameError">
                    A növény neve legalább 2 karakter hosszú kell legyen!
                </p>
            </div>
            <div class="form-check mb-2">
                <label for="is-perennial-yes" class="form-check-label">Évelő</label>
                <input type="radio" id="is-perennial-yes" :value="true" class="form-check-input" v-model="plant.isPerennial">
            </div>
            <div class="form-check mb-2">
                <label for="is-perennial-no" class="form-check-label">Nem évelő</label>
                <input type="radio" id="is-perennial-no" :value="false" class="form-check-input" v-model="plant.isPerennial">
            </div>
            <div class="mb-2">
                <select class="form-select" v-model="plant.category">
                    <option value="virág">Virág</option>
                    <option value="fa">Fa</option>
                    <option value="bokor">Bokor</option>
                </select>
            </div>
            <div class="form-floating mb-3">
                <input type="number" id="price" class="form-control" placeholder="2500" v-model="plant.price">
                <label for="price" class="form-label">Ár</label>
                <p class="bg-danger text-light p-2 mt-2 border border-dark rounded-pill opacity-75" v-if="errors.priceTypeError">
                    Helytelen ár formátum!
                </p>
                <p class="bg-danger text-light p-2 mt-2 border border-dark rounded-pill opacity-75" v-if="errors.priceValueError">
                    Az ár nem lehet kevesebb, mint 500 Ft!
                </p>
            </div>
            <button class="btn btn-success w-100" @click="validateForm">Hozzáadás</button>
        </form>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePlantStore } from '@/stores/plants'

const plantStore = usePlantStore(),
      router = useRouter()

const plant = ref({
    name: '',
    isPerennial: false,
    category: 'virág',
    price: 1000
})
const errors = ref({
    nameError: false,
    priceTypeError: false,
    priceValueError: false
})

async function validateForm(e) {
    e.preventDefault()
    errors.value = []
    let isValid = true

    if(plant.value.name.length < 2) {
        errors.value.nameError = true
        isValid = false
    }
    if(typeof(plant.value.price) !== 'number') {
        errors.value.priceTypeError = true
        isValid = false
    } else if(plant.value.price < 500) {
        errors.value.priceValueError = true
        isValid = false
    }
    
    if(isValid) {
        await newPlant()
    }
}

async function newPlant() {
    
    await plantStore.newPlant(plant.value)
    router.push({ name: 'home' })
}
</script>