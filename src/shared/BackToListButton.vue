<script setup lang="ts">
import UnderlineWhite from './UnderlineWhite.vue'
</script>

<template>
    <div class="back">
        <RouterLink to="/" class="back__link">
            <img src="/svg/back-to-list-arrow.svg" alt="Вернуться к списку" />
            <span class="back__text">Назад к списку</span>
        </RouterLink>
        <UnderlineWhite class="underline" />
    </div>
</template>

<style scoped lang="scss">
.back {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .back__link {
        display: flex;
        align-items: center;
        gap: 0.5em;

        font-size: 20px;
        color: $carrot;

        .back__text {
            line-height: 17px;
            border-bottom: 1px solid;
            transition: color 0.3s ease;

            @media screen and (hover: hover) {
                &:hover {
                    color: $carrot-hover;
                }
            }
        }
    }
    .underline {
        margin-bottom: 40px;
    }
}
</style>
