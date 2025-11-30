<script setup lang="ts">

import {makLogo, ppiALogo, vcwsaLogo} from "~/assets/images";

type Org = { name: string; role?: string; logo?: string; href: string }

// ORGANIZERS (silakan edit sesuai kebutuhan)
const organizers: Org[] = [
  {
    name: 'PPI Aachen',
    role: 'Main Organizer',
    logo:  ppiALogo,
    href: 'https://ppiaachen.de'
  },

  {
    name: '(MAK) Malaysisch-Aachener Klub e.V. ',
    role: 'Main Organizer',
    logo:  makLogo, // contoh kalau nanti punya logo
    href: 'https://www.instagram.com/malaysia.aachen/?hl=en'
  },

  {
    name: 'VCWSA e.V.',
    role: 'Main Organizer',
    logo:  vcwsaLogo, // contoh kalau nanti punya logo
    href: 'https://www.instagram.com/vcwsa_rwth/?hl=en'
  }

]
</script>

<template>
  <UCard>
    <template #header>
      <div class="text-xl font-semibold">Organizers</div>
    </template>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
          v-for="org in organizers"
          :key="org.name"
          class="rounded-xl p-4 ring-1 ring-white/10 bg-black/10 flex items-center gap-4 flex-col justify-center text-center"
      >
        <img :src="org.logo" :alt="org.name" class="w-full h-16 object-contain"/>
        <div class="min-w-0">
          <div class="font-medium truncate">{{ org.name }}</div>
          <div class="text-sm opacity-70">
            {{ org.role || 'Organizer' }}
          </div>
          <div v-if="org.href" class="mt-1">
            <ULink :to="org.href " target="_blank" class="text-[var(--blue1)] hover:underline">
              Website
            </ULink>
          </div>
        </div>
      </div>

      <div v-if="organizers.length === 0" class="col-span-full text-center opacity-70 py-6">
        Add items to <code>organizers[]</code> in the <em>&lt;script setup&gt;</em> section.
      </div>
    </div>
  </UCard>
</template>

<style scoped>

</style>