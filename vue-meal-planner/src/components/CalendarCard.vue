<script lang="ts" setup>
import { useFormatDate } from "../composables/formatters";


// Emit function to signal parent components of selected day
const emits = defineEmits(["daySelected"]);

// Directly call this function when a day is selected, passing the card object 
const addRecipesToDay = (card: Card): void => {
    emits("daySelected", card);
}

// Card interface for TypeScript type checking
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