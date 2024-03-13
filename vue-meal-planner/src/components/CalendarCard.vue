<script lang="ts" setup>
import { useFormatDate } from "../composables/formatters";
import AppLink from "./AppLink.vue";


// Emit function to signal parent components of selected day
const emits = defineEmits(["daySelected", "recipeRemoved"]);

const addRecipeToDay = (card: Card): void => {
    emits("daySelected", card);
}

const recipeRemoved = (recipe: Today, date: Date): void => {
    emits("recipeRemoved", recipe, date);
}
interface Today {
    id: number;
    title: string;
    readyInMinutes: number;
}
interface Card {
    date: Date;
    today: Today[];
}
const props = defineProps<{
    card: Card;
}>();

</script>

<template>
    <v-sheet class="d-flex justify-space-between">
        <v-sheet class="ma-2 pa-2">
            <h2 class="text-h2">{{ useFormatDate(card.date) }}</h2>
        </v-sheet>
        <v-sheet class="ma-2 pa-2">
            <v-btn @click="addRecipeToDay(card)" icon="mdi-plus"></v-btn>
        </v-sheet>
    </v-sheet>
    <v-col>
        <v-card v-for="today in card.today" :key="today.id" class="my-4">
            <v-card-title>
                <!-- Fixed dynamic binding for to prop -->
                <app-link :to="`/recipe/${today.id}`">{{ today.title }}</app-link>
            </v-card-title>
            <v-card-text>{{ today.readyInMinutes }} minutes</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <!-- Removed stray text -->
                <v-btn icon="mdi-trash-can-outline" @click="recipeRemoved(today, card.date)"></v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>
