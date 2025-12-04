<script setup lang="ts">
import Organizers from "~/component/informations/organizers/organizers.vue";
import Sponsors from "~/component/informations/sponsors/sponsors.vue";
</script>

<template>
  <div class="p-6 text-white space-y-6 max-w-5xl mx-auto">
    <!-- HEADER -->
    <div class="space-y-1">
      <h1 class="text-3xl md:text-4xl font-bold">About Us</h1>
      <p class="opacity-80">
        A short introduction to Aachen Open, the organizers, and our sponsors.
      </p>
    </div>

    <!-- EVENT DESCRIPTION -->
    <UCard>
      <template #header>
        <div class="text-xl font-semibold">Event Overview</div>
      </template>
      <div class="space-y-3 leading-relaxed">
        <p>
          <strong>Aachen Open</strong> is a multi-sport tournament for students and the wider
          community in and around Aachen.
        </p>
        <ul class="list-disc pl-5 space-y-1">
          <li>
            Date:
            <span class="opacity-80">06–07 December 2025</span>
          </li>
          <li>
            Location:
            <span class="opacity-80">Aachen (venue details to be announced)</span>
          </li>
          <li>
            Sports:
            <span class="opacity-80">Futsal, Basketball, Badminton, Volleyball </span>
          </li>
        </ul>
        <p class="opacity-80">
          Our goal is to create a friendly and competitive environment to connect students, alumni,
          and the local community within the city of Aachen.
        </p>
      </div>
    </UCard>

    <!-- ORGANIZERS -->
    <organizers />

    <!-- SPONSORS (SINGLE LIST) -->
    <sponsors />

  </div>
</template>

