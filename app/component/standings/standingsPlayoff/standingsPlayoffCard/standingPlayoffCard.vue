<template>
  <UCard :ui="{ body: { padding: 'p-3 sm:p-4' } }">
    <div class="flex justify-between items-center mb-2">
      <span class="text-xs text-gray-500 dark:text-gray-400">Match {{ match.id }}</span>
      <UBadge
        :color="match.status === 'Final' ? 'gray' : 'green'"
        :label="match.status"
        variant="subtle"
        size="xs"
      />
    </div>

    <div class="space-y-2">
      <!-- Team 1 -->
      <div class="flex justify-between items-center">
        <span
          class="text-sm"
          :class="{
            'font-bold text-gray-900 dark:text-white': match.winner === 'team1',
            'text-gray-600 dark:text-gray-300': match.winner !== 'team1'
          }"
        >
          {{ match.team1.name }}
        </span>
        <span
          class="text-sm font-semibold"
          :class="{
            'font-bold text-gray-900 dark:text-white': match.winner === 'team1',
            'text-gray-500 dark:text-gray-400': match.winner !== 'team1'
          }"
        >
          {{ match.team1.score ?? '-' }}
        </span>
      </div>

      <!-- Team 2 -->
      <div class="flex justify-between items-center">
        <span
          class="text-sm"
          :class="{
            'font-bold text-gray-900 dark:text-white': match.winner === 'team2',
            'text-gray-600 dark:text-gray-300': match.winner !== 'team2'
          }"
        >
          {{ match.team2.name }}
        </span>
        <span
          class="text-sm font-semibold"
          :class="{
            'font-bold text-gray-900 dark:text-white': match.winner === 'team2',
            'text-gray-500 dark:text-gray-400': match.winner !== 'team2'
          }"
        >
          {{ match.team2.score ?? '-' }}
        </span>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
// Define the props this component accepts
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

defineProps({
  match: {
    type: Object as () => Match,
    required: true,
  },
});
</script>
