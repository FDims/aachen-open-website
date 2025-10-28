<script setup lang="ts">
import type {Schedule, Team} from "~~/types";
import MatchCard from "~/component/matchCard/matchCard.vue";
import "~/assets/styles/pages/index.scss";

  const mockTeamA: Team = {
    id: "t01",
    name: "Test for a long team name",
    sport: "futsal",
    winCount: 0,
    loseCount: 0,
    points: 0,
  }

const mockTeamB: Team = {
  id: "t02",
  name: "whatever team",
  sport: "futsal",
  winCount: 0,
  loseCount: 0,
  points: 0
}

  const mockSchedule: Schedule[] = [
    {
      id: "m01",
      sport: "futsal",
      time: new Date(2025, 8, 12, 12, 15),
      teamA: mockTeamA,
      teamB: mockTeamB,
      scoreA: 0,
      scoreB: 0,
      finished: true,
    },
    {
      id: "m01",
      sport: "badminton",
      time: new Date(),
      teamA: mockTeamA,
      teamB: mockTeamB,
      scoreA: 0,
      scoreB: 0,
      finished: false,
    },
    {
      id: "m01",
      sport: "basketball",
      time: new Date(2025, 10, 12, 12, 15),
      teamA: mockTeamA,
      teamB: mockTeamB,
      scoreA: 0,
      scoreB: 0,
      finished: false,
    },
    {
      id: "m01",
      sport: "volleyball",
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
  <div class="homepage">
    <div class="homepage-description">
      <div class="homepage-description-image">
        <img src="~/assets/images/aachen-open-logo.png" alt="Aachen Open Logo" class="homepage-description-image-logo"/>
      </div>
      <div class="homepage-description-text">
        <h5>Aachen Open 2025</h5>
        <h3>Tri-Nation League</h3>
        <p> A sport league organized by Perhimpunan Pelajar Indonesia Aachen (Indonesian Student Organization in Aachen),
          Malaysisch-Aachener Klub (Malaysian Organization in Aachen) and Verein der chinesichen
          Wissenschaftler und Studenten in Aachen (Chinese Student and Scientist Organization in Aachen). </p>
      </div>
      <div class="homepage-description-infos">
        <div class="homepage-infos-date">
          <img src="~/assets/images/date_logo.svg" alt="date-logo"  class="homepage-infos-date-icon" />
          <p class="homepage-infos-date-text">06 - 07 December 2025</p>
        </div>
        <div class="homepage-infos-location">
          <img src="~/assets/images/location_logo.svg" alt="location-logo"  class="homepage-infos-location-icon" />
          <ULink class="homepage-infos-location-text" to="https://maps.app.goo.gl/rAQUVeuXEyeDUN1J7" target="_blank">Berufskolleg Nord of StädteRegion Aachen - Location Herzogenrath</ULink>
        </div>
        <div class="homepage-infos-instagram">
          <img src="~/assets/images/instagram_icon.svg" alt="instagram-logo" class="homepage-infos-instagram-icon"/>
          <ULink class="homepage-infos-instagram-text" to="https://www.instagram.com/aachen.open/" target="_blank">@aachen.open</ULink>
        </div>
      </div>
    </div>
    <div class="homepage-schedule-cards-wrapper">
      <div class="homepage-schedule-cards-title">
        <h1 class="homepage-schedule-cards-title-text">Matches of the day:</h1>
        <ULink class="homepage-schedule-cards-redirect" to="/schedulePage">more matches</ULink>
      </div>
      <div class="homepage-schedule-cards">
        <UCarousel
          v-slot ="{item}"
          class="homepage-schedule-carousel"
          dots
          arrows
          :items = "mockSchedule"
          :ui = "{
            item: 'basis-full sm:basis-1/2 md:basis-1/3 ',
            container: 'transition-[height]',
            controls: 'absolute -top-4 inset-x-30',
            dots: '-top-7 hidden sm:flex',
            dot: 'w-6 h-1',
            arrows: 'hidden sm:flex'
            }"
          >
          <match-card :schedule="item" class="homepage-schedule-card"/>
        </UCarousel>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
