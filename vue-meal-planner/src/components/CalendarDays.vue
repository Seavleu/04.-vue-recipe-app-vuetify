<!-- * Aout: A meal planner that represent the upcoming 7 days. First we will start with component that can render serveral days based on a given date -->
<script setup lang="ts">
import { ref } from "vue";
import CalendarCard from "./CalendarCard.vue";

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
});

interface Card {
    date: Date;
    content: string;
}

/**
 * The script will accept the props so that it can executed the 'generateCards' function.
 * This wil generate an array of 'cards' with a date for each card.
 */
const generateCards = (startDate: Date, numberOfDays: number): Card[] => {
    const cards: Card[] = [];
    const currentDate = new Date(startDate);

    for (let i = 0; i < numberOfDays; i++) {
        const date = new Date(currentDate.getTime());
        const content = Card ${ i + 1
    };
    cards.push({ date, content });
    currentDate.setDate(currentDate.getDate() + 1);
}

return cards;
};
const cards = ref<Card[]>(generateCards(props.date, props.days));
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
                <td class="py-4">{{ card.content}}</td>
                <calendar-card :card = "card"/>
            </tr>
        </tbody>
    </v-table>
</template>