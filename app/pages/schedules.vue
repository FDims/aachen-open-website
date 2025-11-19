<script setup lang="ts">
import type { Ref } from 'vue'
import type { Schedule } from '~~/types'
import { getSportName } from '~~/utils/getSportName'

const SPORTS = [
  { key: 'volleyball', label: 'Volleyball', icon: 'i-material-symbols:sports-volleyball' },
  { key: 'basketball', label: 'Basketball', icon: 'i-material-symbols:sports-basketball' },
  { key: 'futsal',     label: 'Futsal',     icon: 'i-material-symbols:sports-soccer' },
  { key: 'badminton',  label: 'Badminton',  icon: 'i-material-symbols:sports-badminton' }
] as const
type SportKey = typeof SPORTS[number]['key']
type DayKey = 'all' | 'day1' | 'day2'

const schedules = inject<Ref<Schedule[]>>('schedules', ref([]))

const norm = (s?: string) => String(s ?? '').toLowerCase().replace(/\s+/g, '')
function sportKey(row: any) {
  const raw = row?.sport
  const name = typeof raw === 'number' ? getSportName(raw) : String(raw ?? '')
  return norm(name)
}
function rowDate(row: any): Date | null {
  const d = row?.scheduled ?? row?.actualTime ?? row?.date ?? row?.time
  if (!d) return null
  const dt = new Date(d)
  return isNaN(dt.getTime()) ? null : dt
}

// adjust if dates differ
const DAY1 = new Date(2025, 11, 6)
const DAY2 = new Date(2025, 11, 7)
function isSameDay(a: Date | null, b: Date) {
  if (!a) return false
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth() === b.getMonth() &&
         a.getDate() === b.getDate()
}

// filters
const selectedSports = ref<Set<SportKey>>(new Set())
function toggleSport(key: SportKey) {
  const next = new Set(selectedSports.value)
  next.has(key) ? next.delete(key) : next.add(key)
  selectedSports.value = next
}
function clearSports() { selectedSports.value = new Set() }

const selectedDay = ref<DayKey>('all')

const rows = computed(() => {
  let all = schedules.value ?? []
  if (selectedDay.value === 'day1') all = all.filter(r => isSameDay(rowDate(r), DAY1))
  else if (selectedDay.value === 'day2') all = all.filter(r => isSameDay(rowDate(r), DAY2))
  if (selectedSports.value.size > 0) {
    all = all.filter(r => selectedSports.value.has(sportKey(r) as SportKey))
  }
  return all
})

const countsBySport = computed(() => {
  const c: Record<string, number> = {}
  for (const r of schedules.value ?? []) {
    const k = sportKey(r); c[k] = (c[k] ?? 0) + 1
  }
  return c
})

const columns = [
  { key: 'sport',      label: 'Sport' },
  { key: 'teamA',      label: 'Team1' },
  { key: 'teamB',      label: 'Team2' },
  { key: 'scheduled',  label: 'Scheduled' },
  { key: 'actualTime', label: 'Actual Time' },
]

// brand styles (white text)
const selectedBtnClass = 'bg-[var(--blue1)] text-white hover:bg-[var(--blue2)]'
const outlineBtnClass  = '!ring-1 !ring-[var(--blue1)] !text-white hover:!bg-[var(--blue1)]'
const badgeSolidBlue = '!bg-[var(--blue1)] !text-white'
const badgeSoftBlue  = '!bg-[color-mix(in_oklab,var(--blue1)_15%,transparent)] !text-white'
</script>

<template>
  <!-- make all text white by default -->
  <div class="p-6 text-white">
    <h1 class="text-2xl font-bold mb-4">Schedule</h1>

    <div class="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4">
      <!-- LEFT: multi-select sport filter -->
      <UCard class="md:sticky md:top-4 h-fit text-white">
        <div class="space-y-2">
          <div class="flex items-center justify-between mb-2">
            <span class="font-semibold">Filter by sport</span>
            <UButton
              size="2xs"
              color="gray"
              variant="ghost"
              class="!text-white"
              :disabled="selectedSports.size===0"
              @click="clearSports"
            >
              Reset
            </UButton>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-1 gap-2">
            <UButton
              v-for="s in SPORTS" :key="s.key"
              color="gray"
              :variant="selectedSports.has(s.key) ? 'solid' : 'outline'"
              class="justify-start"
              :class="selectedSports.has(s.key) ? selectedBtnClass : outlineBtnClass"
              @click="toggleSport(s.key)"
              :aria-pressed="selectedSports.has(s.key)"
            >
              <UIcon :name="s.icon" class="mr-2" />
              <span class="flex-1"> {{ s.label }} </span>
              <UBadge color="gray" variant="soft" :class="badgeSoftBlue">
                {{ countsBySport[s.key] ?? 0 }}
              </UBadge>
            </UButton>

            <!-- All sports -->
            <UButton
              color="gray"
              :variant="selectedSports.size===0 ? 'solid' : 'outline'"
              class="justify-start"
              :class="selectedSports.size===0 ? selectedBtnClass : outlineBtnClass"
              @click="clearSports"
            >
              <UIcon name="i-lucide-list-filter" class="mr-2" />
              <span class="flex-1">All sports</span>
              <UBadge color="gray" variant="soft" :class="badgeSoftBlue">
                {{ schedules.value?.length ?? 0 }}
              </UBadge>
            </UButton>
          </div>
        </div>
      </UCard>

      <!-- RIGHT: day filter + table -->
      <div class="space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <h2 class="text-xl font-semibold">
              <span v-if="selectedDay==='all'">All days</span>
              <span v-else-if="selectedDay==='day1'">Day 1</span>
              <span v-else>Day 2</span>
              <span v-if="selectedSports.size"> ·
                {{ Array.from(selectedSports).map(k => SPORTS.find(s=>s.key===k)?.label).join(', ') }}
              </span>
            </h2>
            <UBadge color="gray" :class="badgeSolidBlue">
              {{ rows.length }} matches
            </UBadge>
          </div>

          <!-- Day buttons -->
          <div class="flex items-center gap-2">
            <UButton
              color="gray"
              :variant="selectedDay==='all' ? 'solid' : 'outline'"
              :class="selectedDay==='all' ? selectedBtnClass : outlineBtnClass"
              class="!text-white"
              size="sm"
              @click="selectedDay='all'"
            >All</UButton>

            <UButton
              color="gray"
              :variant="selectedDay==='day1' ? 'solid' : 'outline'"
              :class="selectedDay==='day1' ? selectedBtnClass : outlineBtnClass"
              class="!text-white"
              size="sm"
              @click="selectedDay='day1'"
            >Day 1</UButton>

            <UButton
              color="gray"
              :variant="selectedDay==='day2' ? 'solid' : 'outline'"
              :class="selectedDay==='day2' ? selectedBtnClass : outlineBtnClass"
              class="!text-white"
              size="sm"
              @click="selectedDay='day2'"
            >Day 2</UButton>
          </div>
        </div>

        <UCard v-if="rows.length===0" class="text-white">
          <div class="py-10 text-center">No matches for this filter.</div>
        </UCard>

        <UTable
          v-else
          :rows="rows"
          :columns="columns"
          :ui="{
            th: 'text-white',
            td: 'text-white',
            tr: 'hover:bg-white/5',
            base: 'divide-y divide-white/10'
          }"
        >
          <template #sport-data="{ row }">
            <div class="flex items-center gap-2">
              <UIcon :name="({ volleyball:'i-material-symbols:sports-volleyball',
                               basketball:'i-material-symbols:sports-basketball',
                               futsal:'i-material-symbols:sports-soccer',
                               badminton:'i-material-symbols:sports-badminton' } as any)[sportKey(row)] || 'i-lucide-calendar'" />
              <span class="capitalize">{{ sportKey(row) }}</span>
            </div>
          </template>
          <template #teamA-data="{ row }">{{ row.teamA?.name ?? row.teamA ?? 'TBD' }}</template>
          <template #teamB-data="{ row }">{{ row.teamB?.name ?? row.teamB ?? 'TBD' }}</template>
          <template #scheduled-data="{ row }">{{ row.scheduled ? new Date(row.scheduled).toLocaleTimeString() : '—' }}</template>
          <template #actualTime-data="{ row }">{{ row.actualTime ? new Date(row.actualTime).toLocaleTimeString() : '—' }}</template>
        </UTable>
      </div>
    </div>
  </div>
</template>
