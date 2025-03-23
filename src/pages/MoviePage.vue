<script setup lang="ts">
import FilmCard from '@entities/FilmCard/FilmCard.vue'
import LoaderPrevue from '@widgets/LoaderPrevue.vue'
import BackToListButton from '@shared/BackToListButton.vue'
import NotFoundText from '@shared/NotFoundText.vue'

import { useFilmsStore } from '@stores/filmsStore'
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movieId = route.params.id

const filmsStore = useFilmsStore()

onMounted(() => {
    filmsStore.getMovie(Number(movieId))
})

onUnmounted(() => {
    filmsStore.clearMovie()
    filmsStore.clearError()
})
</script>

<template>
    <BackToListButton />
    <LoaderPrevue v-if="filmsStore.loader" />
    <FilmCard
        v-if="filmsStore.movie"
        :id="filmsStore.movie.id"
        :poster="filmsStore.movie.poster"
        :title="filmsStore.movie.title"
        :year="filmsStore.movie.year"
        :genres="filmsStore.movie.genres"
        :description="filmsStore.movie.description"
        :actors="filmsStore.movie.actors"
        :directors="filmsStore.movie.directors"
        :duration="filmsStore.movie.collapse.duration"
    />
    <NotFoundText v-if="filmsStore.errorQuery" />
</template>

<style scoped lang="scss">
.back__link {
    margin-bottom: 40px;
}
</style>
