<script setup lang="ts">
import type {Schedule} from "~~/types";
import "./matchCard.css";

defineProps<{
  schedule: Schedule,
}>()

</script>

<template>
  <div class="matchCard-wrapper">
    <div class="matchCard-team-name">
      <h1 class="match-card-team-a">{{schedule.teamA.name}}</h1>
      <h1 class="match-card-team-b">{{schedule.teamB.name}}</h1>
    </div>

    <div class="matchCard-team-score">
      <h1 class="match-card-score-a">{{schedule.scoreA}}</h1>
      <h1 class="match-card-score-a">{{schedule.scoreB}}</h1>
    </div>

  </div>
</template>

<style scoped></style>
