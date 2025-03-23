<script setup lang="ts">
import HeaderComponent from '@widgets/HeaderComponent.vue'
</script>

<template>
    <div>
        <HeaderComponent />

        <main>
            <div class="wrapper">
                <RouterView />
            </div>
        </main>
    </div>
</template>

<style scoped lang="scss">
main {
    width: 100%;
    min-height: $main-height;

    padding: $padding-top-main 1rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: $dark-gray;
    color: white;

    .wrapper {
        width: 100%;
        max-width: $max-width-content;
    }
}
</style>
