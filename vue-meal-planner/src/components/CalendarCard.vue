<script lang="ts" setup>
import { formatDate } from "../composables/formatters";


const emits = defineEmits(["daySelected"]);

const addRecipesToDay = (card: Card): void => {
    emits("daySelected", card);
}

interface Card {
    title: string;
    date: string;
    description: string;
}



const props = defineProps<{
    card: Card;
}>();

</script>

<template>
    <v-sheet class="d-flex justify-space-between">
        <v-sheet class="ma-2 pa-2">
            <h2 class="text-h2">
                {{ useFormatDate(card.date) }}
            </h2>
        </v-sheet>
        <v-sheet class="ma-2 pa-2">
            <v-btn @click="addRecipesToDay(props.card)" class="text-h2">
                {{ props.card.title }}
            </v-btn>
        </v-sheet>
    </v-sheet>
</template>