<script setup lang="ts">
import { defineComponent, h } from 'vue'

// Types
type Org = { name: string; role?: string; logo?: string; href?: string }
type Sponsor = { name: string; logo?: string; href?: string }

// IMPORT LOGO SPONSOR
// Pastikan file ini ada di: app/assets/images/sponsors/KBRIlogo.jpeg
import kbriLogo from '~/assets/images/kbrilogo.jpg'
import ppijLogo from '~/assets/images/ppijlogo.png'
import wartegLogo from '~/assets/images/warteglogo.png'

//IMPORT LOGO ORGANIZERS
import ppiaLogo from '~/assets/images/ppi_logo.svg'
import makLogo from '~/assets/images/mak_logo.svg'
import vcwsaLogo from '~/assets/images/vcwsa_logo.svg'

// ORGANIZERS (silakan edit sesuai kebutuhan)
const organizers: Org[] = [
  {
    name: 'PPI Aachen',
    role: 'Main Organizer',
    logo:  ppiaLogo, 
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

// ALL SPONSORS (SATU LIST AJA)
const sponsors: Sponsor[] = [
  {
    name: 'KBRI (Kedutaan Besar Republik Indonesia)',
    logo: kbriLogo,
    href: 'https://kemlu.go.id/'
  },
  {
    name: 'PPIJ (Perhimpunan Pelajar Indonesia di Jerman)',
    logo: ppijLogo,
    href: 'https://ppijerman.org/'
  },

  {
    name: 'Warteg',
    logo: wartegLogo,
    href: 'https://www.warteg-aachen.com/'
  }
  // Tambah sponsor lain di sini:
  // { name: 'Sponsor Lain', logo: someLogo, href: 'https://example.com' }
]

// Small helper: shows img if src exists, otherwise a placeholder box with the name
const Logo = defineComponent({
  props: { src: String, alt: String },
  setup(props) {
    return () =>
      props.src
        ? h('img', {
            src: props.src,
            alt: props.alt,
            class: 'w-full h-16 object-contain'
          })
        : h(
            'div',
            {
              class:
                'w-full h-16 flex items-center justify-center ring-1 ring-white/20 rounded-lg text-sm opacity-80'
            },
            props.alt || 'Logo'
          )
  }
})
</script>

<template>
  <div class="p-6 text-white space-y-6 max-w-5xl mx-auto">
    <!-- HEADER -->
    <header class="space-y-1">
      <h1 class="text-3xl md:text-4xl font-bold">About Us</h1>
      <p class="opacity-80">
        A short introduction to Aachen Open, the organizers, and our sponsors.
      </p>
    </header>

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
    <UCard>
      <template #header>
        <div class="text-xl font-semibold">Organizers</div>
      </template>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="org in organizers"
          :key="org.name"
          class="rounded-xl p-4 ring-1 ring-white/10 bg-black/10 flex items-center gap-4"
        >
          <Logo :src="org.logo" :alt="org.name" />
          <div class="min-w-0">
            <div class="font-medium truncate">{{ org.name }}</div>
            <div class="text-sm opacity-70">
              {{ org.role || 'Organizer' }}
            </div>
            <div v-if="org.href" class="mt-1">
              <ULink :to="org.href" target="_blank" class="text-[var(--blue1)] hover:underline">
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

    <!-- SPONSORS (SINGLE LIST) -->
    <section class="space-y-4">
      <h2 class="text-2xl font-bold">Sponsors</h2>

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
            class="rounded-xl p-4 ring-1 ring-white/10 bg-black/10 flex items-center gap-4 hover:bg-white/5"
          >
            <Logo :src="sp.logo" :alt="sp.name" />
            <div class="font-medium truncate">
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
  </div>
</template>

