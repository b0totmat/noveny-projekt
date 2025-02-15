<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { usePlantStore } from '@/stores/plants'

const plantStore = usePlantStore()
const router = useRouter()

function redirect(id) {
    router.push(`/modify-plant/${id}`)
}

onMounted(async () => {
  await plantStore.loadPlants()
})
</script>

<template>
  <main class="container">
    <div class="row gy-3">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="p in plantStore.plants" :key="p.id">
        <div class="card">
          <div class="card-header pb-1 pt-2">
            <h4 class="card-title">{{ p.name }}</h4>
          </div>
          <div class="card-body">
            <p class="card-text">Évelő-e: {{ p.isPerennial ? 'Igen' : 'Nem' }}</p>
            <p class="card-text">Kategória: {{ p.category }}</p>
            <p class="card-text">Ár: {{ p.price }} Ft</p>
          </div>
          <div class="card-footer bg-transparent d-flex justify-content-evenly">
            <button class="btn btn-outline-primary" @click="redirect(p.id)">Módosítás</button>
            <button class="btn btn-danger" @click="plantStore.removePlant(p.id)">Törlés</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
