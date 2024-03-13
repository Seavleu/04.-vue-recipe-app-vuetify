<script lang="ts" setup>
import { storeToRefs } from "pinia"
import CalendarDays from './CalendarDays.vue';

import { usePlannerStore } from "@/store/planner"
const store = usePlannerStore();
const {recipes} = storeToRefs(store);
</script>

<template>
    <calendar-days 
    :date="new Date()" 
    :day="7" 
    :recipes="recipes"
    :key="`recipes-${recipes.length}`"
    />
    <h1 class=" color">Weekly calendar</h1>
</template>

<style scoped>
.color{
    color: rgb(204, 105, 168);
}
</style>