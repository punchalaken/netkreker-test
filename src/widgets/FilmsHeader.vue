<script setup lang="ts">
import UnderlineWhite from '@shared/UnderlineWhite.vue'
import SortWidget from './SortWidget.vue'
</script>

<template>
    <div class="films__header__wrapper">
        <h1 class="films__header">Фильмы</h1>
        <SortWidget />
        <UnderlineWhite />
    </div>
</template>

<style scoped lang="scss">
.films__header,
.films__header__wrapper {
    @include flex-column;
    gap: 1em;
}
</style>
