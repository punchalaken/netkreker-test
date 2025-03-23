<script setup lang="ts">
import FilmsHeader from '@widgets/FilmsHeader.vue'
import FilmsList from '@widgets/FilmsList.vue'
</script>

<template>
    <div class="films">
        <FilmsHeader />
        <FilmsList />
    </div>
</template>

<style scoped lang="scss">
.films {
    width: 100%;
    height: 100%;

    @include flex-column;
    gap: 20px;
}
</style>
