<script lang="ts" setup>
const props = defineProps({
    to: {
        type: String,
        required: true
    },
});
</script>

<template>
    <router-link :to="props.to" class="text-light-blue">
        <slot></slot>
    </router-link>
</template>