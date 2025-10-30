<script setup lang="ts">
import StandingGroup from "../standingsGroup/standingGroup.vue";
import type {Group} from "~~/types"

const badmintonTeams = inject<Team[]>("badmintonTeams");
const basketballTeams = inject<Team[]>("basketballTeams");
const futsalTeams = inject<Team[]>("futsalTeams");
const volleyballTeams = inject<Team[]>("volleyballTeams");


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

const badmintonGroups: Group[] = [
  {
    name: "A",
    sport: "badminton",
    teams: badmintonTeams.filter((team) => team.group == "A")
  },
  {
    name: "B",
    sport: "badminton",
    teams: badmintonTeams.filter((team) => team.group == "B")
  },
  {
    name: "C",
    sport: "badminton",
    teams: badmintonTeams.filter((team) => team.group == "C")
  },
  {
    name: "D",
    sport: "badminton",
    teams: badmintonTeams.filter((team) => team.group == "D")
  }
  ]


const futsalGroups: Group[] = [
  {
    name: "A",
    sport: "futsal",
    teams: futsalTeams.filter((team) => team.group == "A")
  },
  {
    name: "B",
    sport: "futsal",
    teams: futsalTeams.filter((team) => team.group == "B")
  },
  {
    name: "C",
    sport: "futsal",
    teams: futsalTeams.filter((team) => team.group == "C")
  },
  {
    name: "D",
    sport: "futsal",
    teams: futsalTeams.filter((team) => team.group == "D")
  }
]

const volleyballGroups: Group[] = [
  {
    name: "A",
    sport: "volleyball",
    teams: volleyballTeams.filter((team) => team.group == "A")
  },
  {
    name: "B",
    sport: "volleyball",
    teams: volleyballTeams.filter((team) => team.group == "B")
  },
  {
    name: "C",
    sport: "volleyball",
    teams: volleyballTeams.filter((team) => team.group == "C")
  },
  {
    name: "D",
    sport: "volleyball",
    teams: volleyballTeams.filter((team) => team.group == "D")
  }
]

const basketballGroups: Group[] = [
  {
    name: "A",
    sport: "basketball",
    teams: basketballTeams.filter((team) => team.group == "A")
  },
  {
    name: "B",
    sport: "basketball",
    teams: basketballTeams.filter((team) => team.group == "B")
  },
]

</script>

<template>
  <div
    class="standing-main-wrapper"
  >
    <UTabs :items="items" color="neutral" size="xl">
      <template #badminton>
        <standing-group :groups="badmintonGroups"/>
      </template>
      <template #basketball>
        <standing-group :groups="basketballGroups"/>
      </template>
      <template #volleyball>
        <standing-group :groups="volleyballGroups"/>
      </template>
      <template #futsal>
        <standing-group :groups="futsalGroups"/>
      </template>
    </UTabs>
  </div>
</template>

<style scoped>

</style>