<script lang="ts" setup>
import {ref, watch} from "vue"
import type { Ref } from "vue";
import { useRecipeSearch} from "../composables/recipeApi";
import type { RecipeResults } from "../types/spoonacular";

const emits = defineEmits (["recipeSelected"]);

const searchQuery: Ref<string> = ref("");
const searchResults: Ref<RecipeResults> [] | [] > = ref([]);

const getSearchResults = async () => {
    const results = await useRecipeSearch(searchQuery.value);
    searchResults.values = results;
}

let timeout: ReturnType<typeof setTimeout>;
const debouncedSearch = () => {
    clearTimeout(timeout);
    timeout = setTimeout(getSearchResults, 500);    
}

// watch(searchQuery, debouncedSearch);
watch (searchQuery, (): void => {
    debouncedSearch();
}
)

const recipeSelected = (recipe: RecipeResults) => {
    emits("recipeSelected", recipe);
};
</script>

<template>
<v-car flat>
    <v-card-text>
        <v-text-field v-model="searchQuery" label="Search"></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-list v-if="searchResults"></v-list>
    <v-list-item v-for="(result, index) in searchResults" :key="index">
        <v-list-item-title @click="recipeSelected(result)" class="list-item">
            {{ result.title }}
        </v-list-item-title>
    </v-list-item>
</v-car>

</template>


<style scoped> 
.list-item {
    cursor: pointer;
}

.list-item:hover,
.list-item:active{
    text-decoration: underline;
}
</style>