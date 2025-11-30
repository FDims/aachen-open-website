<template>
    <UApp class="app">
      <header>
        <Header />
      </header>
      <main>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </main>
      <footer>
        <Footer />
      </footer>

    </UApp>
</template>
<script setup lang="ts">
import Header from "~/component/header/header.vue";
import Footer from "~/component/footer/footer.vue";
import {mapRawTeam} from "~~/utils/mapRawTeam";
import type {Schedule} from "~~/types";
import {mapRawSchedule} from "~~/utils/mapRawSchedule";

const { data } = await useAsyncData(
    'aachen-open-league-data',
    () => $fetch('/api/database'),
    {
      lazy: true
    }
)

const volleyballTeams: Team[] = mapRawTeam(data.value.VolleyballTeams);
const futsalTeams: Team[] = mapRawTeam(data.value.FutsalTeams);
const badmintonMenDouble: Team[] = mapRawTeam(data.value.BadmintonMenDouble);
const badmintonMixedDouble: Team[] = mapRawTeam(data.value.BadmintonMixedDouble);
const basketballTeams: Team[] = mapRawTeam(data.value.BasketballTeams);
const teams: Team[] = volleyballTeams.concat(futsalTeams.concat(badmintonMixedDouble.concat(basketballTeams.concat(badmintonMenDouble))));
const schedule: Schedule[] = mapRawSchedule(data.value.Schedule, teams).sort((a, b) => {
  const dateA = a.scheduled;
  const dateB = b.scheduled;

  if (!dateA && !dateB) return 0;
  if (!dateA) return 1;
  if (!dateB) return -1;

  // Compare the timestamps
  return dateA.getTime() - dateB.getTime();
})


provide("volleyballTeams", volleyballTeams);
provide("futsalTeams", futsalTeams);
provide("badmintonMenDouble", badmintonMenDouble);
provide("badmintonMixedDouble", badmintonMixedDouble);
provide("basketballTeams", basketballTeams);
provide("schedules", schedule);
</script>
