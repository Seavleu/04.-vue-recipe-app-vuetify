<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import type { RecipeResults } from "@/types/spoonacular";
// import { useRecipeInformation } from "@/composables/recipeApi";


import CalendarCard from "@/components/CalendarCard.vue";
import RecipeSearch from "@/components/RecipeSearch.vue";

// Original Array
interface Today {
  id: number;
  title: string;
  readyInMinutes: number;
}

interface Card {
  date: Date;
  content: string;
  today: Today[];
}

const props = defineProps({
  date: {
    type: Date,
    required: true,
  },
  days: {
    type: Number,
    required: false,
    default: 7,
  },
  recipes: {
    type: Array,
    required: false,
    value: [],
  },
});

const generateCards = (startDate: Date, numberOfDays: number): Card[] => {
    const cards: Card[] = [];
    const currentDate = new Date(startDate);

    for (let i = 0; i < numberOfDays; i++) {
        const date = new Date(currentDate.getTime());
        const content = `Card ${i + 1}`;
        const recipesThisDay = (props.recipes || []).filter((recipe: any) => {
            const recipeDate = new Date(recipe.date).setHours(0, 0, 0, 0);
            return recipeDate === date.setHours(0, 0, 0, 0);
        }) as Today[];

        cards.push({ date, content, today: recipesThisDay });
        currentDate.setDate(currentDate.getDate() + 1);
    }
    console.log(cards);

    return cards;
};

const cards = ref<Card[]>(generateCards(props.date, props.days));

// Recipe Dialogs
const dialogVisible: Ref<boolean> = ref(false);
const dateSelected: Ref<Date | null> = ref(null);

const recipeDialogOpen = (card: Card): void => {
    dateSelected.value = card.date;
    dialogVisible.value = true;
};
const recipeDialogClose = (): void => {
    dateSelected.value = null;
    dialogVisible.value = false;
};
// Recipe Management
const insertRecipeOnDay = (recipe: RecipeResults) => {
    if (dateSelected.value) {
        cards.value = cards.value.map((card) => {
            if (card.date.getTime() === dateSelected.value?.getTime()) {
                return {
                    ...card,
                    today: [...card.today, recipe as unknown as Today], // Cast if necessary
                };
            }
            return card;
        });
        recipeDialogClose();
    }
};
</script>

<template>
    <v-table>
        <thead>
            <tr>
                <th class="text-left">Upcoming Date</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="card in cards" :key="card.date.toString()">
                <td class="py-4">
                    {{ card.content }}
                    <!-- <calendar-card :card="card" @daySelected="recipeDialogOpen" /> -->
                </td>
            </tr>
        </tbody>
    </v-table>
    <v-dialog v-model="dialogVisible" scrollable>
        <v-card>
            <v-card-title> Search for a recipe to add to this day </v-card-title>
            <recipe-search @recipeSelected="insertRecipeOnDay" />
            <v-card-actions>
                <v-btn color="primary" block @click="recipeDialogClose">Close Dialog</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
