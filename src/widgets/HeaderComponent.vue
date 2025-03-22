<script setup lang="ts"></script>

<template>
    <header class="header">
        <RouterLink to="/" class="header__text"> #movienow </RouterLink>
    </header>
</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: $header-height;

    @include flex-center;

    background-color: $red-header;

    font-size: $header-font-size;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.21em;

    box-shadow: 0 8px 7px #00000047;

    .header__text {
        margin: 19px 0 0 8px;
    }
}
</style>
