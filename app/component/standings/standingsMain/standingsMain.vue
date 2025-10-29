<script setup lang="ts">
import StandingGroup from "../standingsGroup/standingGroup.vue";
import type {Team,Group} from "~~/types";

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

const mockTeams: Team[] = [
  {
    id: "t02",
    name: "whatever team",
    sport: "futsal",
    winCount: 0,
    loseCount: 0,
    points: 0,
    group:'A',
    goalAway:0,
    goalFor:0,
    goalDiff:0,
  },
  {
    id: "t02",
    name: "whatever team",
    sport: "futsal",
    winCount: 0,
    loseCount: 0,
    points: 0,
    group:'A',
    goalAway:0,
    goalFor:0,
    goalDiff:0,
  },
  {
    id: "t02",
    name: "whatever team",
    sport: "futsal",
    winCount: 0,
    loseCount: 0,
    points: 0,
    group:'A',
    goalAway:0,
    goalFor:0,
    goalDiff:0,
  },
  {
    id: "t02",
    name: "whatever team",
    sport: "futsal",
    winCount: 0,
    loseCount: 0,
    points: 0,
    group:'B',
    goalAway:0,
    goalFor:0,
    goalDiff:0,
  },
  {
    id: "t02",
    name: "whatever team",
    sport: "futsal",
    winCount: 0,
    loseCount: 0,
    points: 0,
    group:'B',
    goalAway:0,
    goalFor:0,
    goalDiff:0,
  },
  {
    id: "t02",
    name: "name is so longggggggggg",
    sport: "futsal",
    winCount: 0,
    loseCount: 0,
    points: 0,
    group:'B',
    goalAway:0,
    goalFor:0,
    goalDiff:0,
  }
]

const group: Group[] = [{
  name: 'A',
  sport:"futsal",
  teams: mockTeams.filter((team) => team.group=='A')
},
  {
    name: 'B',
    sport:"futsal",
    teams: mockTeams.filter((team) => team.group=='B')
  }]
</script>

<template>
  <div
    class="standing-main-wrapper"
  >
    <UTabs :items="items" color="neutral" size="xl">
      <template #badminton>
        <standing-group :groups="group"/>
      </template>
      <template #basketball>
        <standing-group :groups="group"/>
      </template>
      <template #volleyball>
        <standing-group :groups="group"/>
      </template>
      <template #futsal>
        <standing-group :groups="group"/>
      </template>
    </UTabs>
  </div>
</template>

<style scoped>

</style>