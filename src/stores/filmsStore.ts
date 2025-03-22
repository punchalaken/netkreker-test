import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import axios from 'axios'

import type { Film } from './types'

export const useFilmsStore = defineStore('filmsStore', () => {
    const films: Ref<Film[]> = ref([])

    function getFilms() {
        axios
            .get('https://mashroom-movies-api.netlify.app/api/movies')
            .then((response) => (films.value = response.data.data))
            .catch((error) => console.log(`Ошибка при запросе ${error}`))
    }

    return { films, getFilms }
})
