<script setup lang="ts">
import type {Schedule, Team} from "~~/types";
import MatchCard from "~/component/matchCard/matchCard.vue";
import "~/assets/styles/index.css"

  const mockTeamA: Team = {
    id: "t01",
    name: "teamA",
    sport: "futsal",
    winCount: 0,
    loseCount: 0,
  }

const mockTeamB: Team = {
  id: "t02",
  name: "teamB",
  sport: "futsal",
  winCount: 0,
  loseCount: 0,
}

  const mockSchedule: Schedule[] = [
    {
      id: "m01",
      sport: "futsal",
      time: new Date(2025, 10, 12, 12, 15),
      teamA: mockTeamA,
      teamB: mockTeamB,
      scoreA: 0,
      scoreB: 0,
      finished: false,
    },
    {
      id: "m01",
      sport: "futsal",
      time: new Date(2025, 10, 12, 12, 15),
      teamA: mockTeamA,
      teamB: mockTeamB,
      scoreA: 0,
      scoreB: 0,
      finished: false,
    },
    {
      id: "m01",
      sport: "futsal",
      time: new Date(2025, 10, 12, 12, 15),
      teamA: mockTeamA,
      teamB: mockTeamB,
      scoreA: 0,
      scoreB: 0,
      finished: false,
    },
    {
      id: "m01",
      sport: "futsal",
      time: new Date(2025, 10, 12, 12, 15),
      teamA: mockTeamA,
      teamB: mockTeamB,
      scoreA: 0,
      scoreB: 0,
      finished: false,
    },
    {
      id: "m01",
      sport: "futsal",
      time: new Date(2025, 10, 12, 12, 15),
      teamA: mockTeamA,
      teamB: mockTeamB,
      scoreA: 0,
      scoreB: 0,
      finished: false,
    },
    {
      id: "m01",
      sport: "futsal",
      time: new Date(2025, 10, 12, 12, 15),
      teamA: mockTeamA,
      teamB: mockTeamB,
      scoreA: 0,
      scoreB: 0,
      finished: false,
    }
  ]
</script>

<template>
  <div class="homepage"></div>
  <div class="homepage-schedule-cards-wrapper">
    <h1>Matches</h1>
    <div class="homepage-schedule-cards">
      <UCarousel
        v-slot ="{item}"
        class="homepage-schedule-carousel"
        arrows
        :items = "mockSchedule"
        :ui = "{ item: `basis-1/3`}"
        >
        <match-card :schedule="item" class="homepage-schedule-card"/>
      </UCarousel>
    </div>
  </div>
</template>

<style scoped></style>
