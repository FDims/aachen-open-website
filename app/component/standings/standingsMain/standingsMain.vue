<script setup lang="ts">
import StandingGroup from "../standingsGroup/standingGroup.vue";
import type {Group, Schedule, Sport, Team} from "~~/types"
import "./standingMain.scss"
import {badmintonLogo, basketballLogo, futsalLogo, volleyballLogo} from "~/assets/images";

const badmintonMenDoubleTeams = inject<Team[]>("badmintonMenDouble");
const badmintonMixedDoubleTeams = inject<Team[]>("badmintonMixedDouble");
const basketballTeams = inject<Team[]>("basketballTeams");
const futsalTeams = inject<Team[]>("futsalTeams");
const volleyballTeams = inject<Team[]>("volleyballTeams");
const schedules = inject<Schedule[]>("schedules");


const items = [
  {
    label: "Men's Doubles",
    slot: 'badmintonMenDobule',
    img: badmintonLogo,
  },
  {
    label: "Mixed Doubles",
    slot: 'badmintonMixedDouble',
    img: badmintonLogo,
  },
  {
    label: "Basketball",
    slot: 'basketball',
    img: basketballLogo,
  },
  {
    label: "Volleyball",
    slot: 'volleyball',
    img: volleyballLogo,
  },
  {
    label: "Futsal",
    slot: 'futsal',
    img: futsalLogo,
  },
];

const getSportGroup = (teams: Team[]) : Group[] => {
  const groups: Group[] = [];
  for (const team of teams) {
    const group: Group = groups.find((group) => group.name === team.group)
    if (!group) {
      groups.push({
        name: team.group,
        sport: team.sport,
        teams: [team],
      })
    } else {
      group.teams.push(team);
    }
  }

  return groups;
}

const getPlayoffTeams = (sportType: Sport): Schedule[] => {
  return schedules.filter((schedule) => schedule.sport == sportType && schedule.type != "group");
}
</script>

<template>
  <div
    class="standing-main-wrapper"
  >
    <UTabs
        :items="items"
        color="error"
        size="xl"
        class="standing-main-tabs"
        orientation="horizontal"
        :ui="{
          label: 'table-label',
          list: 'table-tabs',
        }"
    >
      <template #default="{ item }">
        <div class="table-tabs-item">
          <img :src="item.img" alt="sport's logo" class="table-tabs-icon" />
          <p class="table-tabs-title">{{item.label}}</p>
        </div>
      </template>
      <template #badmintonMenDobule>
        <standing-group :groups="getSportGroup(badmintonMenDoubleTeams)" :playoff="getPlayoffTeams('badmintonMenDouble')" bracket="quarter"/>
      </template>
      <template #badmintonMixedDouble>
        <standing-group :groups="getSportGroup(badmintonMixedDoubleTeams)" :playoff="getPlayoffTeams('badmintonMixedDouble')" bracket="quarter"/>
      </template>
      <template #basketball>
        <standing-group :groups="getSportGroup(basketballTeams)" :playoff="getPlayoffTeams('basketball')" bracket="semi"/>
      </template>
      <template #volleyball>
        <standing-group :groups="getSportGroup(volleyballTeams)" :playoff="getPlayoffTeams('volleyball')" bracket="semi"/>
      </template>
      <template #futsal>
        <standing-group :groups="getSportGroup(futsalTeams)" :playoff="getPlayoffTeams('futsal')" bracket="semi"/>
      </template>
    </UTabs>
  </div>
</template>

<style scoped>

</style>