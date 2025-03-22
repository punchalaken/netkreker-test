<script setup lang="ts">
import FilmCard from '@/entities/FilmCard/FilmCard.vue'
import { useFilmsStore } from '@/stores/filmsStore'
import type { Film } from '@/stores/types'
import axios from 'axios'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const filmId = route.params.id

const films = useFilmsStore().$state.films
const currentFilm: Ref<Film | null | undefined> = ref(null)

const chechFilm = () => {
    if (films.length) {
        currentFilm.value = films.find((film) => film.id === Number(filmId))
    } else {
        console.log('Послал жа')
        axios
            .get(`https://mashroom-movies-api.netlify.app/api/movie/${filmId}`)
            .then((response) => {
                currentFilm.value = response.data
            })
            .catch((error) => console.log(error))
    }
}

onMounted(() => {
    chechFilm()
    
})
</script>

<template>
    <FilmCard
        v-if="currentFilm"
        :id="currentFilm.id"
        :poster="currentFilm.poster"
        :title="currentFilm.title"
        :year="currentFilm.year"
        :genres="currentFilm.genres"
        :description="currentFilm.description"
        :actors="currentFilm.actors"
        :directors="currentFilm.directors"
        :duration="currentFilm.collapse.duration"
    />
    <div class="loader" v-else>Загрузка...</div>
</template>

<style scoped lang="scss">
.films {
    width: 100%;

    @include flex-column;
    gap: 40px;
}
</style>
