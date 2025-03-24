<script setup lang="ts">
import CardDuration from '../../widgets/CardDuration.vue'

import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
    id: number
    poster: string | null
    title: string
    year: number
    genres: string[]
    description: string | null
    actors: string[] | null
    directors: string[] | null
    duration: string[] | null
}>()

const { directors, actors } = props

const alt = `Постер к фильму ${props.title}`

const genresSpan = computed(() => props.genres.join(', '))

const directorSpan = computed(() => {
    if (!directors) {
        return 'Режиссёр не указан'
    }

    return directors.length > 1 ? `Режиссёры: ${directors.join(', ')}` : `Режиссёр: ${directors[0]}`
})

const actorsSpan = computed(() => {
    return !actors ? 'Не указаны' : actors.join(', ')
})
</script>

<template>
    <li class="card">
        <div class="card__image__wrapper">
            <img v-if="poster" :src="poster" :alt="alt" class="card__image" />
            <img
                v-else
                src="https://kinomaiak.ru/wp-content/uploads/2018/02/noposter-223x300.png"
                alt="Постер отсутствует"
            />
        </div>
        <div class="card__text">
            <div class="card__info">
                <h2 class="card__title">
                    <RouterLink :to="`/movie/${id}`">
                        {{ title }}
                    </RouterLink>
                </h2>
                <span class="card__year">{{ year }}, {{ genresSpan }}</span>
                <span class="card__director">{{ directorSpan }}</span>
                <div class="card__actors">
                    <span class="card__actors__title">Актёры: </span>
                    <span class="card__actors__text">{{ actorsSpan }}</span>
                </div>
            </div>
            <span v-if="description" class="card__description">{{ description }}</span>
            <CardDuration v-if="duration" :duration="duration" />
        </div>
    </li>
</template>

<style scoped lang="scss">
.card {
    width: 100%;

    display: flex;
    align-items: stretch;
    background-color: $upper-middle-gray;

    position: relative;

    box-shadow: 0 4px 4px 0 #00000040;
    transition:
        transform 0.5s ease,
        box-shadow 0.5s ease;

    @media screen and (hover: hover) {
        &:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 20px #00000059;
        }
    }

    @include media(md) {
        flex-direction: column;
    }

    .card__image__wrapper {
        @include flex-center;
        padding-inline: 28px;
        background-color: $low-middle-gray;

        .card__image {
            display: block;
            width: 112px;
            height: 168px;
        }
    }

    .card__text {
        @include flex-column;
        gap: 1.25em;

        font-size: 0.75em;
        font-weight: 700;

        padding: 2.67em 2.67em 2.67em 2em;

        .card__info {
            @include flex-column;
            gap: 0.5em;

            .card__title {
                font-size: 3em;
            }

            .card__actors {
                display: flex;
                gap: 0.5em;
            }

            .card__actors__text {
                font-weight: 400;
            }
        }

        .card__description {
            font-size: 16px;
            font-weight: 400;
        }

        .card__duration {
            position: absolute;
            top: 2em;
            right: 0;
        }
    }
}

.card__year,
.card__director,
.card__actors__title {
    color: $middle-gray;
    text-transform: uppercase;
}
</style>
