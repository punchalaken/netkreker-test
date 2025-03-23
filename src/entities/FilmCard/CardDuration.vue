<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    duration: string[] | null
}>()

const { duration } = props

const chechDuration = computed(() => {
    if (!duration) return

    const lastIndex = duration[0][duration[0].length - 1]

    return lastIndex !== '.' ? `${duration}:00` : duration[0]
})
</script>

<template>
    <div class="card__duration" v-if="duration">
        <span>{{ chechDuration }}</span>
        <img src="/svg/duration-card.svg" alt="Продолжительность фильма" />
    </div>
</template>

<style scoped lang="scss">
.card__duration {
    width: 184px;
    height: 30px;
    background-color: $low-middle-gray;
    color: black;
    font-weight: 700;

    position: absolute;
    top: 2em;
    right: 0;

    @include flex-center;
    gap: 0.5em;

    clip-path: polygon(6px 0, 100% 0, 100% 100%, 0 100%);
    text-transform: uppercase;
}
</style>
