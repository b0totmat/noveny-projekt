<template>
    <h1>{{ route.params.id }}</h1>
</template>
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>