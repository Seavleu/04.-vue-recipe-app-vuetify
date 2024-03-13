import {defineStore} from 'pinia';
import { ref } from 'vue';

export const useCacheStore = defineStore('cache', () => {
   // Cache data 
   const cache = ref<any>([]);
   const cachedData = (key: string) : any => {
    try{
        return cache.value[key];
    } catch (e){
        return undefined;
    }
   }
   const cacheData = (key: string, data: any) => {
    cache.value[key] = data;
   }
   // Return Both Fucntions
   return {cacheData, cachedData}
});



// export const useCacheStore = defineStore('cache', () => {
//     // Cache data 
//     const cacheData = () : void => {}
//     const cachedData = () : void => {}
//     // Return Cache data
//     return {cacheData, cachedData}
//  });

