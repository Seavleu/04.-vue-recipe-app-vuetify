<script setup lang="ts">
</script>
<template>
  <v-layout>
    <v-container class="main">
      <main>
        <router-view />
      </main>
    </v-container>
    <v-footer app><span class="text-light-green">My Meal Planner</span>&nbsp;- &copy; {{ new Date().getFullYear()
      }}</v-footer>
  </v-layout>
</template>
