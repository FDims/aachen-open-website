<script setup lang="ts">
import type {Schedule} from "~~/types";
import "./matchCard.scss";
import futsalLogo from '~/assets/images/football_logo.svg';
import badmintonLogo from '~/assets/images/badminton_logo.svg';
import volleyballLogo from '~/assets/images/volleyball_logo.svg';
import basketballLogo from '~/assets/images/basketball_logo.svg';

const props = defineProps<{
  schedule: Schedule,
}>()

const logo = () => {
  if (props.schedule.sport === "futsal")
    return futsalLogo;
  if (props.schedule.sport === "badminton")
    return badmintonLogo
  if (props.schedule.sport === "volleyball")
    return volleyballLogo
  if (props.schedule.sport === "basketball")
    return basketballLogo
}

const status = () => {
  const now = new Date();
  if(props.schedule.finished)
    return "finished"
  else if(!props.schedule.finished && props.schedule.time <= now)
    return "live"
  else return "upcoming"
}
</script>

<template>
  <div
      class="match-card-wrapper rounded-lg bg-elevated/50 ring ring-default"
  >
      <div class="match-card-header">
        <img :src="logo()" alt="sports-logo" class="match-card-header-logo">
        <p class="match-card-header-text">{{props.schedule.sport}}</p>
      </div>
      <div class="match-card-body">
        <h1 class="match-card-name-home">{{props.schedule.teamA ? props.schedule.teamA.name : "TBD"}}</h1>
        <h1 class="match-card-score-home">{{props.schedule.scoreA ?? "-"}}</h1>

        <p>vs</p>

        <h1 class="match-card-score-away">{{props.schedule.scoreB ?? "-"}}</h1>
        <h1 class="match-card-name-away">{{props.schedule.teamB ? props.schedule.teamB.name : "TBD"}}</h1>
      </div>
      <div class="match-card-footer">
        <div
            :class="'match-card-footer-circle -' + status()"
        ></div>
        <p :class="'match-card-footer-status -' + status()"> {{status() == "upcoming" ? "scheduled " + props.schedule.time.toLocaleTimeString() : status()}}</p>
      </div>
  </div>
</template>

<style scoped></style>
