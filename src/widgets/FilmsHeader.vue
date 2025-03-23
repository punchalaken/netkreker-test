<script setup lang="ts">
import UnderlineWhite from '@shared/UnderlineWhite.vue'
import SortWidget from './SortWidget.vue'
</script>

<template>
    <div class="films__header">
        <h1 class="films__header">Фильмы</h1>
        <SortWidget />
        <UnderlineWhite />
    </div>
</template>

<style scoped lang="scss">
.films__header {
    @include flex-column;
    gap: 1em;
}
</style>
