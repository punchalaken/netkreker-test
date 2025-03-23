import axios from 'axios'

import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import type { Film, SortValues } from './types'

const url = 'https://mashroom-movies-api.netlify.app/api/movies'
const urlId = 'https://mashroom-movies-api.netlify.app/api/movie/'

export const useFilmsStore = defineStore('filmsStore', () => {
    const films: Ref<Film[]> = ref([])
    const movie: Ref<Film | null> = ref(null)
    const loader: Ref<boolean> = ref(false)
    const errorQuery: Ref<boolean> = ref(false)

    const fetchWrapper = async (callback: () => Promise<void>) => {
        loader.value = true
        try {
            await callback()
        } catch (error) {
            console.log(error)
            errorQuery.value = true
        } finally {
            loader.value = false
        }
    }

    const getFilms = () =>
        fetchWrapper(async () => {
            const response = await axios.get(url)
            const result = response.data.data
            films.value = result
            localStorage.setItem('filmsStorage', JSON.stringify(result))
        })

    const getMovie = async (id: number) => {
        fetchWrapper(async () => {
            const response = await axios.get(`${urlId}${id}`)
            const result = response.data.data
            if (!result) {
                errorQuery.value = true
            } else {
                movie.value = response.data.data
            }
        })
    }

    const clearMovie = () => {
        movie.value = null
    }

    const clearError = () => {
        errorQuery.value = false
    }

    const sortFilms = (value: SortValues) => {
        if (value === 'title') {
            films.value.sort((item1, item2) => {
                const item1Number = /^\d/.test(item1.title)
                const item2Number = /^\d/.test(item2.title)

                const isItem1English = /^[A-Za-z]/.test(item1.title)
                const isItem2English = /^[A-Za-z]/.test(item2.title)

                if (item1Number && !item2Number) return 1
                if (!item1Number && item2Number) return -1

                if (isItem1English && !isItem2English) return -1
                if (!isItem1English && isItem2English) return 1

                return item1.title.toLowerCase().localeCompare(item2.title.toLowerCase())
            })
            return
        }
        if (value === 'year') {
            films.value.sort((item1, item2) => {
                return item1.year - item2.year
            })
            return
        }
        if (value === null) {
            const storedFilms = localStorage.getItem('filmsStorage')
            if (storedFilms) {
                films.value = storedFilms ? JSON.parse(storedFilms) : null
            }
        }
    }

    return {
        films,
        loader,
        movie,
        errorQuery,
        getFilms,
        getMovie,
        clearMovie,
        clearError,
        sortFilms,
    }
})
