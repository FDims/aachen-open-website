<script setup lang="ts">

import StandingsTable from "../standingsTable/standingsTable.vue";
import type {Group} from "~~/types";
import "./standingGroup.scss";

const props = defineProps<{
  groups: Group[];
}>()

const items = [
  {
    label: "Group Stage",
    slot: 'group-stage',
  },
  {
    label: "Playoff",
    slot: 'playoff',
  },
];

</script>

<template>
  <div
    class="standing-group-wrapper"
  >
    <UTabs :items="items" color="error" class="standing-group-tab">
      <template #playoff>
        playoff
      </template>
      <template #group-stage>
        <div class="standing-group-tables">
          <div v-for="group in props.groups">
            <standings-table
                :group="group"
                class="standing-group-table rounded-lg bg-elevated/50 ring ring-default"
            />
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<style scoped>

</style>