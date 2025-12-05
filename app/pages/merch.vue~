<script setup lang="ts">
import "../assets/styles/pages/merch.scss";
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core';
import {
  bundle1,
  bundle2,
  bundle3,
  bundle4,
  jersey1,
  jersey2,
  jersey3,
  jersey4,
  jersey5,
  tshirt1, tshirt2, tshirt3, tshirt4, tshirt5, tshirt6, tshirt7
} from "~/assets/images";

const breakpoints = useBreakpoints(breakpointsTailwind)

const eventDate = new Date(2025, 11, 6);
const today = new Date();
console.log(today)
console.log(eventDate)

const disable = () : boolean => {
  if(today.getFullYear() < eventDate.getFullYear())
    return false;
  if(today.getMonth() < eventDate.getMonth())
    return false;
  return today.getDate() >= eventDate.getDate();

};

const bundlePhotos = [
    bundle3,
    bundle1,
    bundle4,
    bundle2,
]

const jerseyPhotos = [
    jersey1,
    jersey2,
    jersey3,
    jersey4,
    jersey5
]

const tShirtPhotos = [
    tshirt1,
    tshirt2,
    tshirt3,
    tshirt4,
    tshirt5,
    tshirt6,
    tshirt7,
]

const ctaOrientation = computed(() => {
  return breakpoints.greaterOrEqual('md').value ? 'horizontal' : 'vertical'
})

</script>

<template>
  <div>
    <div class="merch-text">
      <h1 class="merch-title">Aachen Open Merch Pre-Order</h1>
      <p class="merch-subtitle">pre-order closed on 5th December 2025, after that date the price will not be discounted</p>
    </div>


    <UPageCTA
        :orientation="ctaOrientation"
        reverse
        class="bundle-wrapper"
    >
      <template #title>
        <h1 class="bundle-title"> Jersey and T-Shirt Bundle</h1>
      </template>
      <template #description>
        <p class="bundle-subtitle">Pre-Order now for:</p>
        <div class="bundle-prices">
          <p class="bundle-price">€22</p>
          <p class="bundle-price-original">€27</p>
        </div>

      </template>
      <template #links>
        <ULink
            href="https://docs.google.com/forms/d/e/1FAIpQLSdN3oo6iMPntX_5q5CaEMXHCM2lvDwc6iHK1Zky-gN1F6CPeQ/viewform"
            target="_blank"
            class="bundle-buy-button"
            :disabled="disable()"
        >
          <UButton color="neutral" variant="soft" :disabled="disable()">
            Order now
          </UButton>
        </ULink>
      </template>
      <UCarousel
          v-slot="{item}"
          arrows
          :items="bundlePhotos"
          class="bundle-carousel"
          loop
      >
        <img
            :src="item"
            alt="bundle-photo"
            class="rounded-lg bundle-pictures"
        />
      </UCarousel>
    </UPageCTA>


    <div class="merch-individual">
      <UPageCard class="merch-jersey" reverse orientation="vertical">
          <h1 class="jersey-title">Jersey</h1>
          <p class="jersey-subtitle">Pre-Order now for:</p>
          <div class="jersey-prices">
            <p class="jersey-price">€12</p>
            <p class="jersey-price-original">€15</p>
          </div>
          <ULink
              href="https://docs.google.com/forms/d/e/1FAIpQLSdN3oo6iMPntX_5q5CaEMXHCM2lvDwc6iHK1Zky-gN1F6CPeQ/viewform"
              target="_blank"
              class="jersey-buy-button"
              :disabled="disable()"
          >
            <UButton color="neutral" variant="soft" :disabled="disable()">
              Order now
            </UButton>
          </ULink>
        <UCarousel
            v-slot="{item}"
            arrows
            :items="jerseyPhotos"
            class="jersey-carousel"
            loop
        >
          <img
              :src="item"
              alt="jersey-photo"
              class="rounded-lg jersey-pictures"
          />
        </UCarousel>
      </UPageCard>

      <UPageCard class="merch-tshirt" reverse orientation="vertical">
        <h1 class="tshirt-title">T-Shirt</h1>
          <p class="tshirt-subtitle">Pre-Order now for:</p>
          <div class="tshirt-prices">
            <p class="tshirt-price">€13</p>
            <p class="tshirt-price-original">€16</p>
          </div>
          <ULink
              href="https://docs.google.com/forms/d/e/1FAIpQLSdN3oo6iMPntX_5q5CaEMXHCM2lvDwc6iHK1Zky-gN1F6CPeQ/viewform"
              target="_blank"
              class="tshirt-buy-button"
              :disabled="disable()"
          >
            <UButton color="neutral" variant="soft" :disabled="disable()">
              Order now
            </UButton>
          </ULink>
        <UCarousel
            v-slot="{item}"
            arrows
            :items="tShirtPhotos"
            class="tshirt-carousel"
            loop
        >
          <img
              :src="item"
              alt="tshirt-photo"
              class="rounded-lg tshirt-pictures"
          />
        </UCarousel>
      </UPageCard>
    </div>


  </div>
</template>

<style scoped>

</style>