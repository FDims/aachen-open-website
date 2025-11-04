<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui/components/NavigationMenu.vue"
import "./header.scss"

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
    to: `/standings`,
    active: route.path.startsWith("/standings"),
  },
]);
</script>

<template>
  <UHeader
    class="header"
    toggle-side="left"
    :ui="{
    toggle: 'flex sm:hidden',
    }"
  >
    <template #left>
      <img
        src="~/assets/images/aachen-open-logo.svg"
        alt="logo"
        class="header-logo size-15"
      />
      <h1 class="header-text text-2xl font-bold">
        Aachen Open
      </h1>
    </template>

    <template #right>
      <div class="hidden sm:flex">
        <UNavigationMenu
          :items="items"
          color="neutral"
          highlight
          class="header-menu"
          :ui="{
            link: 'header-menu'
          }"
        />
      </div>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        color="neutral"
        highlight
        class="header-menu"
        orientation="vertical"
        :ui="{
          link: 'header-menu text-xl'
        }"
      />
    </template>
  </UHeader>
</template>

<style scoped>
</style>
