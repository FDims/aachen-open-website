<script setup lang="ts">
import StandingGroup from "../standingsGroup/standingGroup.vue";

const items = [
  {
    label: "Badminton",
    slot: 'badminton',
  },
  {
    label: "Basketball",
    slot: 'basketball',
  },
  {
    label: "Volleyball",
    slot: 'volleyball',
  },
  {
    label: "Futsal",
    slot: 'futsal',
  },
];
</script>

<template>
  <div
    class="standing-main-wrapper"
  >
    <UTabs :items="items" color="neutral" size="xl">
      <template #badminton>
        <standing-group />
      </template>
      <template #basketball>
        <standing-group />
      </template>
      <template #volleyball>
        <standing-group />
      </template>
      <template #futsal>
        <standing-group />
      </template>
    </UTabs>
  </div>
</template>

<style scoped>

</style>