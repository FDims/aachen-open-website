<script setup lang="ts">
import "./footer.scss"
</script>

<template>
  <UFooter class="footer">
    <div class="footer-text">
      <p class="text-muted text-sm">Copyright © Aachen Open 2025</p>
    </div>

    <div class="footer-links">
      <ULink to="https://www.instagram.com/aachen.open" target="_blank">
      <span class="footer-link-acop">
        Aachen Open
        <span class="iconify i-lucide:arrow-up-right inline-block size-3 align-top text-dimmed" aria-hidden="true"></span>
      </span>
      </ULink>
      <ULink to="https://www.instagram.com/ppiaachen" target="_blank">
        <span class="footer-link-ppi">
          PPI Aachen
          <span class="iconify i-lucide:arrow-up-right inline-block size-3 align-top text-dimmed" aria-hidden="true" ></span>
        </span>
      </ULink>
      <ULink to="https://www.instagram.com/malaysia.aachen" target="_blank">
        <span class="footer-link-mak">
          MAK
          <span class="iconify i-lucide:arrow-up-right inline-block size-3 align-top text-dimmed" aria-hidden="true"></span>
        </span>
      </ULink>
      <ULink to="https://www.instagram.com/vcwsa_rwth" target="_blank">
        <span class="footer-link-vcwsa">
          VCWSA
          <span class="iconify i-lucide:arrow-up-right inline-block size-3 align-top text-dimmed" aria-hidden="true"></span>
        </span>
      </ULink>
    </div>
  </UFooter>
</template>

<style scoped></style>
