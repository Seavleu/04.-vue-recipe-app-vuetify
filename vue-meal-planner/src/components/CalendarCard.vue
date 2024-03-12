<script lang="ts" setup>
import { useFormatDate } from "../composables/formatters";

interface Cards {
    title: string;
    date: string;
    description: string;
}

const props = defineProps<{
    card: Cards;
}>();

</script>

<template>
    <v-sheet class="d-flex justify-space-between">
        <v-sheet class="ma-2 pa-2">
            <h2 class="text-h2">
                {{ useFormatDate(card.date) }}
            </h2>
        </v-sheet>
    </v-sheet>
</template>