<script setup lang="ts">
import type {Schedule} from "~~/types";
import "./standingPlayoffCard.scss";

defineProps<{
  match: Schedule;
}>()
</script>

<template>
  <UCard :ui="{ body: { padding: 'p-1 sm:p-2' } }" class="playoff-card">
    <div class="playoff-card__badge-wrapper">
      <UBadge
        :color="match.type == 'final' ? 'gray' : 'green'"
        :label="match.sport + ' ' + match.type"
        class="playoff-card__badge"
        variant="subtle"
        size="small"
      />
    </div>

    <!-- Team A -->
    <div class="playoff-card__content">
      <div class="playoff-card__teamA">
        <span
          class="playoff-card__teamA-name"
          :class="{
            ' -winner' : match.scoreA > match.scoreB
          }"
        >
          {{ match.teamA ? match.teamA.name : "TBD" }}
        </span>
        <span
          class="playoff-card__teamA-score"
          :class="{
            ' -winner': match.scoreA > match.scoreB
          }"
        >
          {{ match.teamA && match.finished ? match.scoreA.toString() : '-' }}
        </span>
      </div>

      <!-- Team B -->
      <div class="playoff-card__teamB">
        <span
          class="playoff-card__teamB-name"
          :class="{
            ' -winner': match.scoreA < match.scoreB
          }"
        >
          {{ match.teamB  ? match.teamB.name : "TBD" }}
        </span>
        <span
          class="playoff-card__teamB-score"
          :class="{
            ' -winner': match.scoreA < match.scoreB,
          }"
        >
          {{ match.teamB && match.finished ? match.scoreB.toString() : '-' }}
        </span>
      </div>
    </div>
  </UCard>
</template>
