<template>
  <div class="bg-gray-100 dark:bg-gray-900 py-12 min-h-screen">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Tournament Bracket
      </h1>

      <!-- Bracket Container -->
      <div class="flex justify-center">
        <!-- Main Bracket Area -->
        <div class="bracket-area flex flex-row space-x-2 sm:space-x-6 md:space-x-12">

          <!-- Round 1: Quarter-Finals -->
          <div class="round-column flex flex-col justify-around space-y-4">
            <h2 class="round-title">Quarter-Finals</h2>
            <standing-playoff-card
              v-for="match in bracketData.quarterFinals"
              :key="match.id"
              :match="match"
              class="w-48 sm:w-64"
            />
          </div>

          <!-- Connectors 1 -->
          <div class="connector-column flex flex-col justify-around">
            <div class="connector-line qf-sf"></div>
            <div class="connector-line qf-sf"></div>
          </div>

          <!-- Round 2: Semi-Finals -->
          <div class="round-column flex flex-col justify-around space-y-4">
            <h2 class="round-title">Semi-Finals</h2>
            <standing-playoff-card
              v-for="match in bracketData.semiFinals"
              :key="match.id"
              :match="match"
              class="w-48 sm:w-64"
            />
          </div>

          <!-- Connectors 2 -->
          <div class="connector-column flex flex-col justify-center">
            <div class="connector-line sf-f"></div>
          </div>

          <!-- Round 3: Finals -->
          <div class="round-column flex flex-col justify-center space-y-16">
            <div class="flex flex-col space-y-4">
              <h2 class="round-title">Final</h2>
              <standing-playoff-card :match="bracketData.final" class="w-48 sm:w-64" />
            </div>
          </div>

          <!-- Connectors 3 -->
          <div class="connector-column flex flex-col justify-center">
            <div class="connector-line f-w"></div>
          </div>

          <!-- Round 4: Winner -->
          <div class="round-column flex flex-col justify-center">
            <h2 class="round-title">Winner</h2>
            <UCard class="w-48 sm:w-64 bg-yellow-100 dark:bg-yellow-900 border-yellow-400">
              <div class="flex flex-col items-center justify-center h-24">
                <span class="text-lg font-bold text-yellow-700 dark:text-yellow-200">
                  <!-- This will find the winner of the final match -->
                  {{ getWinner(bracketData.final) }}
                </span>
                <span class="text-sm text-yellow-600 dark:text-yellow-300">Champion</span>
              </div>
            </UCard>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// --- Define our data types ---
import StandingPlayoffCard from "~/component/standings/standingsPlayoff/standingsPlayoffCard/standingPlayoffCard.vue";

interface Team {
  name: string;
  score: number | null;
}

interface Match {
  id: string;
  team1: Team;
  team2: Team;
  status: 'Pending' | 'Live' | 'Final';
  winner?: 'team1' | 'team2' | null;
}

interface BracketData {
  quarterFinals: Match[];
  semiFinals: Match[];
  thirdPlace: Match;
  final: Match;
}

// --- Mock Data for the Bracket ---
const bracketData: BracketData = {
  quarterFinals: [
    {
      id: 'QF1',
      team1: { name: 'Volley Llamas', score: 2 },
      team2: { name: 'Net Ninjas', score: 3 },
      status: 'Final',
      winner: 'team2',
    },
    {
      id: 'QF2',
      team1: { name: 'Spike Squad', score: 3 },
      team2: { name: 'Block Party', score: 1 },
      status: 'Final',
      winner: 'team1',
    },
    {
      id: 'QF3',
      team1: { name: 'Serve-ivors', score: 0 },
      team2: { name: 'Kings of Court', score: 3 },
      status: 'Final',
      winner: 'team2',
    },
    {
      id: 'QF4',
      team1: { name: 'Set to Win', score: 3 },
      team2: { name: 'Dig Dynasty', score: 2 },
      status: 'Final',
      winner: 'team1',
    },
  ],
  semiFinals: [
    {
      id: 'SF1',
      team1: { name: 'Net Ninjas', score: 3 },
      team2: { name: 'Spike Squad', score: 2 },
      status: 'Final',
      winner: 'team1',
    },
    {
      id: 'SF2',
      team1: { name: 'Kings of Court', score: 1 },
      team2: { name: 'Set to Win', score: 3 },
      status: 'Final',
      winner: 'team2',
    },
  ],
  thirdPlace: {
    id: '3RD',
    team1: { name: 'Spike Squad', score: 3 },
    team2: { name: 'Kings of Court', score: 0 },
    status: 'Final',
    winner: 'team1',
  },
  final: {
    id: 'F',
    team1: { name: 'Net Ninjas', score: 1 },
    team2: { name: 'Set to Win', score: 3 },
    status: 'Final',
    winner: 'team2',
  },
};

// --- Helper function to get winner name ---
const getWinner = (match: Match): string => {
  if (match.winner === 'team1') return match.team1.name;
  if (match.winner === 'team2') return match.team2.name;
  return 'TBD';
};
</script>

<style scoped>
</style>
