<template>
    <main class="container">
    <div class="row gy-3">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <form>
            <div class="form-floating mb-2">
                <input type="text" class="form-control" id="plant-name" placeholder="Tulipán">
                <label for="plant-name" class="form-label">Növény neve</label>
            </div>
            <div class="form-check mb-2">
                <label for="is-perennial-yes" class="form-check-label">Évelő</label>
                <input type="radio" name="is-perennial" id="is-perennial-yes" class="form-check-input">
            </div>
            <div class="form-check mb-2">
                <label for="is-perennial-no" class="form-check-label">Nem évelő</label>
                <input type="radio" name="is-perennial" id="is-perennial-no" class="form-check-input">
            </div>
            <div class="mb-2">
                <select class="form-select">
                    <option value="virág">Virág</option>
                    <option value="fa">Fa</option>
                    <option value="bokor">Bokor</option>
                </select>
            </div>
            <div class="form-floating mb-2">
                <input type="number" id="price" class="form-control" placeholder="2500">
                <label for="price" class="form-label">Ár</label>
            </div>
            <button class="btn btn-success">Hozzáadás</button>
        </form>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePlantStore } from '@/stores/plants'

const plantStore = usePlantStore()
const route = useRoute()
</script>