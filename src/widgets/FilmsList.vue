<script setup lang="ts">
import FilmCard from '@/entities/FilmCard/FilmCard.vue'
import { useFilmsStore } from '@/stores/filmsStore'
import { onMounted } from 'vue'
import Loader from './LoaderPrevue.vue'

const filmsStore = useFilmsStore()

onMounted(() => {
    filmsStore.getFilms()
})
</script>

<template>
    <ul class="films__list" v-if="filmsStore.films.length">
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
    <Loader v-else />
</template>

<style scoped lang="scss">
.films__list {
    width: 100%;

    @include flex-column;
    gap: 1.5em;
}
</style>
