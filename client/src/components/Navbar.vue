<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">Növény App</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link">Növények</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/new-plant" class="nav-link">Új növény</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>