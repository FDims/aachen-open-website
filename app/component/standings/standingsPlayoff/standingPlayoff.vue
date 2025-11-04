<script setup lang="ts">
import "./standingPlayoff.scss"
import StandingPlayoffCard from "~/component/standings/standingsPlayoff/standingsPlayoffCard/standingPlayoffCard.vue";
import type {Bracket, Schedule, Sport} from "~~/types";
import {getSportName} from "../../../../utils/getSportName";

const props = defineProps<{
  bracket: Bracket;
  matchSchedules: Schedule[];
  sport: Sport;
}>()


interface BracketData {
  quarterFinals: Schedule[];
  semiFinals: Schedule[];
  final: Schedule[];
}

console.log(props.matchSchedules)

const bracketData: BracketData ={
  quarterFinals: props.matchSchedules.filter((match) => match.type == "quarter"),
  semiFinals: props.matchSchedules.filter((match) => match.type == "semi"),
  final:props.matchSchedules.filter((match) => match.type == "final"),
}

// --- Helper function to get winner name ---
const getWinner = (match: Schedule): string => {
  if (match.finished && match.teamA && match.winnerTeam === match.teamA.id) return match.teamA.name;
  if (match.finished && match.teamB && match.winnerTeam === match.teamB.id) return match.teamB.name;
  return 'TBD';
};
</script>

<template>
  <div class="standing-playoff__wrapper">
    <div class="standing-playoff__container">
      <h1 class="standing-playoff__title">
        {{getSportName(props.sport)}} Knock-Out Bracket
      </h1>

      <div class="standing-playoff__bracket-container">
        <div class= "standing-playoff__bracket-area">

          <div v-if="props.bracket == 'quarter'" class="standing-playoff__quarter-final">
            <h2 class="standing-playoff__quarter-final__title">Quarter-Finals</h2>
            <standing-playoff-card
              v-for="match in bracketData.quarterFinals"
              :key="match.id"
              :match="match"
              class="standing-playoff__quarter-final__card"
            />
          </div>

          <div class="standing-playoff__semi-final">
            <h2 class="round-title standing-playoff__semi-final__title">Semi-Finals</h2>
            <standing-playoff-card
              v-for="match in bracketData.semiFinals"
              :key="match.id"
              :match="match"
              class="standing-playoff__semi-final__card"
            />
          </div>

          <div class="standing-playoff__final">
            <h2 class="round-title standing-playoff__final__title">Final</h2>
            <standing-playoff-card :match="bracketData.final[0]" class="standing-playoff__final__card" />
          </div>

          <div class="standing-playoff__winner">
            <h2 class="standing-playoff__winner__title">Winner</h2>
            <UCard class="standing-playoff__winner__card">
              <div class="standing-playoff__winner__card__wrapper">
                <span class="standing-playoff__winner__team">
                  {{ getWinner(bracketData.final[0]) }}
                </span>
              </div>
            </UCard>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
