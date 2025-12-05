<script setup lang="ts">

import {
  courtImage,
  locationIcon,
  rules1,
  rules2,
  vendor1,
  vendor2,
  vendor3,
  vendor4,
  vendor5,
  vendor6
} from "~/assets/images";
import "../assets/styles/pages/venueAndRules.scss"

const vendors = [vendor1, vendor2, vendor3, vendor4, vendor5, vendor6];
</script>

<template>
  <section class="space-y-4 wrapper">
    <h1 class="title"> Venue & Vendors </h1>

    <UCard>
      <template #header>
        <div class="text-lg font-semibold text-center">Court</div>
      </template>
      <div class="location-link">
        <img :src="locationIcon" alt="location-logo"  class="location-icon" />
        <ULink class="homepage-infos-location-text" to="https://maps.app.goo.gl/Z3VAY9UWXvcDPEMt7" target="_blank">Berufskolleg Nord of StädteRegion Aachen - Location Herzogenrath</ULink>
      </div>
      <img :src="courtImage" alt="Court" class="images"/>

    </UCard>

    <UCard>
      <template #header>
        <div class="text-lg font-semibold text-center">Rules</div>
      </template>
      <img :src="rules2" alt="Rules2" class="images"/>
      <img :src="rules1" alt="Rules1" class="images"/>

    </UCard>

    <UCard>
      <template #header>
        <div class="text-lg font-semibold text-center">vendors</div>
      </template>
      <UCarousel
          v-slot="{item}"
          arrows
          :items="vendors"
          class="vendor-carousel"
          loop
      >
        <img
            :src="item"
            alt="bundle-photo"
            class="rounded-lg bundle-pictures"
        />
      </UCarousel>

    </UCard>
  </section>
</template>

<style scoped>

</style>