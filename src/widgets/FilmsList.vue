<script setup lang="ts">
import FilmCard from '@entities/FilmCard/FilmCard.vue'
import Loader from './LoaderPrevue.vue'
import NotFound from '@pages/NotFound.vue'

import { useFilmsStore } from '@stores/filmsStore'
import { onMounted, onUnmounted } from 'vue'

const filmsStore = useFilmsStore()

onMounted(() => {
    filmsStore.getFilms()
})

onUnmounted(() => {
    filmsStore.clearError()
})
</script>

<template>
    <Loader v-if="filmsStore.loader" />
    <ul class="films__list" v-else>
        <FilmCard
            v-for="film in filmsStore.films"
            :key="film.id"
            :id="film.id"
            :poster="film.poster"
            :title="film.title"
            :year="film.year"
            :genres="film.genres"
            :description="film.description"
            :actors="film.actors"
            :directors="film.directors"
            :duration="film.collapse?.duration"
        />
    </ul>
    <NotFound v-if="filmsStore.errorQuery" />
</template>

<style scoped lang="scss">
.films__list {
    width: 100%;

    @include flex-column;
    gap: 1.5em;
}
</style>
