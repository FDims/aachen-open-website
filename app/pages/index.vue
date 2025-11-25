<script setup lang="ts">
import type {Schedule, Team} from "~~/types";
import MatchCard from "~/component/matchCard/matchCard.vue";
import "~/assets/styles/pages/index.scss";

const time = new Date();
const eventTime = new Date(2025, 11, 6);
const schedules = inject<Schedule[]>("schedules")?.filter(schedule => schedule.actualTime.getDate() == time.getDate());
schedules?.sort((a,b) => a.id - b.id);

const getCurrentScheduleIndex = (): number => {
  const scheduleList = schedules?.filter((schedule) => !schedule.finished && schedule.scheduled <= time)
  if (scheduleList)
    return scheduleList[0].id;
  return 0;
}
</script>

<template>
  <div class="homepage">
    <div class="homepage-description">
      <div class="homepage-description-image">
        <img src="~/assets/images/aachen-open-logo.svg" alt="Aachen Open Logo" class="homepage-description-image-logo"/>
      </div>
      <div class="homepage-description-text">
        <h5>Aachen Open 2025</h5>
        <h3>Tri-Nation League</h3>
        <p> A sport league organized by Perhimpunan Pelajar Indonesia Aachen (Indonesian Students Association in Aachen),
          Malaysisch-Aachener Klub (MAK) and Verein der chinesichen
          Wissenschaftler und Studenten in Aachen (VCWSA). </p>
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
        <ULink class="homepage-schedule-cards-redirect" to="/schedules" :disabled="true" >click for schedule</ULink>
      </div>
      <div class="homepage-schedule-cards">
        <UCarousel
            v-if="time >= eventTime"
            v-slot ="{item}"
            class="homepage-schedule-carousel"
            arrows
            :items = "schedules"
            :ui = "{
              item: 'basis-full sm:basis-1/2 md:basis-1/3 ',
              container: 'transition-[height]',
              controls: 'absolute -top-4 inset-x-30',
              arrows: 'hidden sm:flex'
              }"
            :start-index="getCurrentScheduleIndex()"
          >
          <match-card :schedule="item" class="homepage-schedule-card"/>
        </UCarousel>
        <div v-else class="homepage-schedule-coming-soon">
          <h1>
            Coming Soon!
          </h1>
        </div>
      </div>
      <p
        class="homepage-schedule-swipe-text"
      >
        swipe for more!
      </p>
    </div>
  </div>
</template>

<style scoped></style>
