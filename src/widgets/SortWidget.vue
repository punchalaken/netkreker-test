<script setup lang="ts">
import CustomCheckBox from '@shared/CustomCheckBox.vue'

import { useFilmsStore } from '@stores/filmsStore'
import type { SortValues } from '@stores/types'
import { ref, watch, type Ref } from 'vue'

const filmStore = useFilmsStore()

const checked: Ref<SortValues | null> = ref(null)

const handleChecked = (value: SortValues): void => {
    checked.value = checked.value === value ? null : value
}

watch(checked, () => {
    filmStore.sortFilms(checked.value)
})
</script>

<template>
    <div class="checkbox__wrapper">
        <CustomCheckBox
            :checked="checked === 'title'"
            :value="'title'"
            @change-checked="(value) => handleChecked(value)"
        >
            Отсортировать по имени</CustomCheckBox
        >

        <CustomCheckBox
            :checked="checked === 'year'"
            :value="'year'"
            @change-checked="(value) => handleChecked(value)"
        >
            Отсортировать по году</CustomCheckBox
        >
    </div>
</template>

<style scoped lang="scss">
.checkbox__wrapper {
    display: flex;
    gap: 2em;
    .label-checkbox {
        @include flex-center;
        gap: 0.5em;

        color: $low-middle-gray;

        .real-checkbox {
            width: 0;
            height: 0;
            opacity: 0;
            z-index: -1;
            position: absolute;
        }

        .custom-checkbox {
            display: block;
            width: 15px;
            height: 15px;
            border: 1px solid $low-middle-gray;
            position: relative;

            &::before {
                content: '';
                display: block;
                width: 12px;
                height: 9px;

                background-image: url('/svg/CheckedCheckbox.svg');
                background-repeat: no-repeat;

                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);

                transition: 0.2s ease;
            }
        }

        .real-checkbox:checked + .custom-checkbox::before {
            transform: translate(-50%, -50%) scale(1);
        }

        .real-checkbox:checked + .custom-checkbox {
            border-color: $carrot;
            background-color: $carrot;
        }

        .real-checkbox:focus + .custom-checkbox {
            box-shadow:
                0 0 0 1px $carrot,
                0 0 10px $carrot;
        }
    }
}
</style>
