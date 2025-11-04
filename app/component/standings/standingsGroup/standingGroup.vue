<script setup lang="ts">

import StandingsTable from "../standingsTable/standingsTable.vue";
import type {Bracket, Group, Schedule} from "~~/types";
import "./standingGroup.scss";
import StandingPlayoff from "~/component/standings/standingsPlayoff/standingPlayoff.vue";

const props = defineProps<{
  groups: Group[];
  playoff: Schedule[];
  bracket: Bracket;
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
        <standing-playoff :bracket="props.bracket" :match-schedules="props.playoff"/>
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