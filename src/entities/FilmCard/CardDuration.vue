<script setup lang="ts">
defineProps<{
    duration: string[] | null
}>()
</script>

<template>
    <div class="card__duration" v-if="duration">
        <span>{{ duration[0] }}</span>
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
}
</style>
