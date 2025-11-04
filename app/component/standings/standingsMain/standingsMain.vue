<script setup lang="ts">
import StandingGroup from "../standingsGroup/standingGroup.vue";
import type {Group, Schedule} from "~~/types"

const badmintonTeams = inject<Team[]>("badmintonTeams");
const basketballTeams = inject<Team[]>("basketballTeams");
const futsalTeams = inject<Team[]>("futsalTeams");
const volleyballTeams = inject<Team[]>("volleyballTeams");
const schedules = inject<Schedule[]>("schedules");


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

const badmintonPlayoff: Schedule[] = schedules.filter((schedule) => schedule.sport == "badminton" && schedule.type != "group");
const basketballPlayoff: Schedule[] = schedules.filter((schedule) => schedule.sport == "basketball" && schedule.type != "group");
const futsalPlayoff: Schedule[] = schedules.filter((schedule) => schedule.sport == "futsal" && schedule.type != "group");
const voleyballPlayoff: Schedule[] = schedules.filter((schedule) => schedule.sport == "volleyball" && schedule.type != "group");

</script>

<template>
  <div
    class="standing-main-wrapper"
  >
    <UTabs :items="items" color="neutral" size="xl">
      <template #badminton>
        <standing-group :groups="badmintonGroups" :playoff="badmintonPlayoff" bracket="quarter"/>
      </template>
      <template #basketball>
        <standing-group :groups="basketballGroups" :playoff="basketballPlayoff" bracket="semi"/>
      </template>
      <template #volleyball>
        <standing-group :groups="volleyballGroups" :playoff="voleyballPlayoff" bracket="quarter"/>
      </template>
      <template #futsal>
        <standing-group :groups="futsalGroups" :playoff="futsalPlayoff" bracket="quarter"/>
      </template>
    </UTabs>
  </div>
</template>

<style scoped>

</style>