<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

import Navbar from './components/Navbar.vue'
import { usePlantStore } from './stores/plants'

const plantStore = usePlantStore()

onMounted(async () => {
  plantStore.loadPlants()
})
</script>

<template>
  <header class="mb-5">
    <Navbar />
  </header>
  <RouterView />
</template>
