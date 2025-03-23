<script setup lang="ts">
import type { SortValues } from '@stores/types'

const props = defineProps<{
    checked: boolean
    value: SortValues
}>()

const emit = defineEmits<{
    (e: 'change-checked', value: SortValues): void
}>()

const handleEmit = () => {
    emit('change-checked', props.value)
}
</script>

<template>
    <label class="label-checkbox">
        <input type="checkbox" class="real-checkbox" :checked="checked" @change="handleEmit" />
        <span class="custom-checkbox"></span>
        <slot></slot>
    </label>
</template>

<style scoped lang="scss">
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
</style>
