<script setup lang="ts">

import StandingsTable from "../standingsTable/standingsTable.vue";
import { Team } from "../../../../types";

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

const mockTeams: Team[] = [
  {
    id: "t02",
    name: "whatever team",
    sport: "futsal",
    winCount: 0,
    loseCount: 0,
    points: 0
  },
  {
    id: "t02",
    name: "whatever team",
    sport: "futsal",
    winCount: 0,
    loseCount: 0,
    points: 0
  },
  {
    id: "t02",
    name: "whatever team",
    sport: "futsal",
    winCount: 0,
    loseCount: 0,
    points: 0
  },
  {
    id: "t02",
    name: "whatever team",
    sport: "futsal",
    winCount: 0,
    loseCount: 0,
    points: 0
  },
  {
    id: "t02",
    name: "whatever team",
    sport: "futsal",
    winCount: 0,
    loseCount: 0,
    points: 0
  },
  {
    id: "t02",
    name: "whatever team",
    sport: "futsal",
    winCount: 0,
    loseCount: 0,
    points: 0
  }
]
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
        <standings-table group-name="Group A" :teams="mockTeams" />
      </template>
    </UTabs>
  </div>
</template>

<style scoped>

</style>