import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core"

interface Recipe {
    id: number;
    date: Date;
}

export const usePlannerStore = defineStore('planner', () => {
    const recipes = ref<Recipe[] | any>(useLocalStorage('planner',
        []));

        const addRecipe = (recipe: Recipe) => {
            recipes.value.push(recipe);
        }
        const removeRecipeByIdDate = (options: {id:number, date: Date}) => {
            const {id, date} = options;
            const recipeIndex: number = recipes.value.findIndex((recipe: Recipe) => recipe.id === id && new Date(recipe.date).setHours(0,0,0,0) === new Date(date).setHours(0,0,0,0))
            recipes.value.splice(recipeIndex, 1);
        }
    return { recipes, addRecipe, removeRecipeByIdDate }
})


//  * using VueUse
