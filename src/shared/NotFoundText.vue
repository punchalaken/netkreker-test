<script setup lang="ts">
</script>

<template>
    <div class="error">
        <span class="error__text">К сожалению, по вашему запросу ничего не найдено...</span>
    </div>
</template>

<style scoped lang="scss">
.error {
    @include flex-column;
    gap: 48px;

    .error__text {
        font-size: $error-font-size;
    }
}
</style>
