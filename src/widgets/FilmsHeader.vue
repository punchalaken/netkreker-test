<script setup lang="ts">
import UnderlineWhite from '@/shared/UnderlineWhite.vue'
</script>

<template>
    <div class="films__header">
        <h1 class="films__header">Фильмы</h1>
        <div class="">Сортировки</div>
        <UnderlineWhite />
    </div>
</template>

<style scoped lang="scss">
.films__header {
    @include flex-column;
    gap: 1em;
}
</style>
