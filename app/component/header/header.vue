<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui/components/NavigationMenu.vue"
import "../header/header.css"

const route = useRoute();
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: `/`,
    active: route.path.endsWith("/"),
  },
  {
    label: "Schedule",
    to: `/schedulePage`,
    active: route.path.startsWith("/schedulePage"),
  },
  {
    label: "Standings",
    to: `/standingPage`,
    active: route.path.startsWith("/standingPage"),
  },
]);
</script>

<template>
  <UHeader class="header">
    <template #left>
      <img
        src="~/assets/images/aachen-open-logo.png"
        alt="logo"
        class="header-logo"
      />
      <h1 class="header-text">
        Aachen Open
      </h1>
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        color="neutral"
        highlight
        class="header-menu"
        :ui="{
          link: 'header-menu'
        }"
      />
    </template>
  </UHeader>
</template>

<style scoped>
</style>
