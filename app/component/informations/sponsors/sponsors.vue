<script setup lang="ts">

import {
  AKILogo,
  DAADLogo,
  JPALogo,
  kbriLogo,
  malaysianConsulateGeneralLogo,
  malaysianEmbassyLogo,
  ppiJLogo,
  wartegLogo, yiJoyLogo
} from "~/assets/images";

type Sponsor = { name: string; logo?: string; href?: string }

// ALL SPONSORS (SATU LIST AJA)
const sponsors: Sponsor[] = [
  {
    name: 'KBRI (Kedutaan Besar Republik Indonesia) Berlin',
    logo: kbriLogo,
    href: 'https://kemlu.go.id/'
  },
  {
    name: 'PPIJ (Perhimpunan Pelajar Indonesia di Jerman)',
    logo: ppiJLogo,
    href: 'https://ppijerman.org/'
  },
  {
    name: 'Warteg',
    logo: wartegLogo,
    href: 'https://www.warteg-aachen.com/'
  },
  {
    name: 'Consulate General of Malaysia in Frankfurt',
    logo: malaysianConsulateGeneralLogo,
    href: 'https://www.kln.gov.my/web/deu_frankfurt'
  },
  {
    name: 'Malaysia Embassy in Berlin',
    logo: malaysianEmbassyLogo,
    href: 'https://www.kln.gov.my/web/deu_berlin'
  },
  {
    name: 'Jabatan Perkhidmatan Awam',
    logo: JPALogo,
    href: 'https://www.jpa.gov.my/'
  },
  {
    name: 'DAAD',
    logo: DAADLogo,
    href: 'https://www.daad.de/'
  },
  {
    name: 'Yi Joy Badminton Studio',
    logo: yiJoyLogo,
    href: 'https://u.wechat.com/MDacT8jW_uvx5ezpFu8aZBU?s=2'
  }
  // Tambah sponsor lain di sini:
  // { name: 'Sponsor Lain', logo: someLogo, href: 'https://example.com' }
]

// ALL COLLABORATORS (SATU LIST AJA)
const collaborators: Sponsor[] = [
  {
    name: 'Arbeitskreis Indonesia',
    logo: AKILogo,
    href: 'https://www.instagram.com/arbeitskreis.id/?hl=en'
  },
  // Tambah sponsor lain di sini:
  // { name: 'Sponsor Lain', logo: someLogo, href: 'https://example.com' }
]
</script>

<template>
  <section class="space-y-4">
    <h2 class="text-2xl font-bold">Sponsors & Collaborators</h2>

    <UCard>
      <template #header>
        <div class="text-lg font-semibold">Our Sponsors</div>
      </template>

      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <ULink
            v-for="sp in sponsors"
            :key="sp.name"
            :to="sp.href || '#'"
            target="_blank"
            class="rounded-xl p-4 ring-1 ring-white/10 bg-black/10 flex items-center gap-4 hover:bg-white/5 flex-col"
        >
          <img :src="sp.logo" :alt="sp.name" class="w-full h-16 object-contain"/>
          <div class="font-medium text-wrap text-center">
            {{ sp.name }}
          </div>
        </ULink>

        <div v-if="sponsors.length === 0" class="opacity-70 py-2 col-span-full">
          Add sponsors to the <code>sponsors[]</code> array in the
          <em>&lt;script setup&gt;</em> section.
        </div>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <div class="text-lg font-semibold">Our Collaborators</div>
      </template>

      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <ULink
            v-for="sp in collaborators"
            :key="sp.name"
            :to="sp.href || '#'"
            target="_blank"
            class="rounded-xl p-4 ring-1 ring-white/10 bg-black/10 flex items-center gap-4 hover:bg-white/5 flex-col"
        >
          <img :src="sp.logo" :alt="sp.name" class="w-full h-16 object-contain"/>
          <div class="font-medium text-wrap text-center">
            {{ sp.name }}
          </div>
        </ULink>

        <div v-if="sponsors.length === 0" class="opacity-70 py-2 col-span-full">
          Add sponsors to the <code>sponsors[]</code> array in the
          <em>&lt;script setup&gt;</em> section.
        </div>
      </div>
    </UCard>
  </section>
</template>

<style scoped>

</style>