<script setup lang="ts">
import type {Bracket, Schedule, Sport} from '~~/types'
import "../assets/styles/pages/schedules.scss"
import {badmintonLogo, basketballLogo, futsalLogo, volleyballLogo} from "~/assets/images";

const SPORTS = [
  { key: 'volleyball', label: 'Volleyball', icon: volleyballLogo },
  { key: 'basketball', label: 'Basketball', icon: basketballLogo },
  { key: 'futsal',     label: 'Futsal',     icon: futsalLogo },
  { key: 'badmintonMixedDouble',  label: 'Mixed Doubles',  icon: badmintonLogo },
  { key: 'badmintonMenDouble',  label: "Men's Doubles",  icon: badmintonLogo }
] as const
type SportKey = typeof SPORTS[number]['key']
type DayKey = 'all' | 'day1' | 'day2'

const schedules = inject<Schedule[]>('schedules')

const setIcon = (sport: Sport) => {
  if(sport === 'futsal')
    return futsalLogo;
  if(sport === 'basketball')
    return basketballLogo;
  if(sport === 'volleyball')
    return volleyballLogo;
  return badmintonLogo;
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

function getStageType(type: Bracket): string {
  switch (type) {
    case "quarter": return "Quarter Final";
    case "semi": return "Semi Final";
    case "final": return "Final";
    case "group": return "Group Stage";
    default:
      return "TBD";
  }
}

const selectedDay = ref<DayKey>('all')

function rows () : Schedule[]  {
  let all = schedules ?? []
  if (selectedDay.value === 'day1') all = all.filter(r => isSameDay(rowDate(r), DAY1))
  else if (selectedDay.value === 'day2') all = all.filter(r => isSameDay(rowDate(r), DAY2))
  if (selectedSports.value.size > 0) {
    all = all.filter(r => selectedSports.value.has(r.sport))
  }
  return all.slice().sort((a, b) => {
    const dateA = rowDate(a);
    const dateB = rowDate(b);

    // Handle null dates (push them to the end, or start depending on preference)
    if (!dateA && !dateB) return 0;
    if (!dateA) return 1;
    if (!dateB) return -1;

    // Compare the timestamps
    return dateA.getTime() - dateB.getTime();
  });
}

const countsBySport = computed(() => {
  const c: Record<string, number> = {}
  for (const r of schedules ?? []) {
    const k = r.sport; c[k] = (c[k] ?? 0) + 1
  }
  return c
})

const column : TableColumn<Schedule>[] = [
  {
    accessorKey: 'scheduled',
    header: ' Scheduled',
    cell: ({ row }) => {
      return new Date(row.getValue('scheduled')).toLocaleTimeString('en-GB', {
        day : '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  },
  {
    accessorKey: 'teamA',
    header: 'Team1',
    cell: ({ row }) => {
      return row.getValue("teamA")? row.getValue("teamA").name : "TBD";
    }
  },
  {
    accessorKey: 'teamB',
    header: 'Team2',
    cell: ({ row }) => {
      return row.getValue("teamB")? row.getValue("teamB").name : "TBD";
    }
  },
  {
    accessorKey: 'scoreA',
    header: 'Score1',
  },
  {
    accessorKey: 'scoreB',
    header: 'Score2',
  },
  {
    accessorKey: 'sport',
    header: 'Sport',
  },
  {
    accessorKey: 'type',
    header: 'Stage',
    cell: ({ row }) => {
      return row.getValue("type")? getStageType(row.getValue("type")) : "TBD";
    }
  },
  {
    accessorKey: 'actualTime',
    header: 'Actual Time',
    cell: ({ row }) => {
      return new Date(row.getValue('actualTime')).toLocaleTimeString('en-GB', {
        day : '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  },
  {
    accessorKey: 'court',
    header: 'Court',
  },
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
    <h1 class="text-2xl font-bold text-center">Schedule</h1>
    <ULink
        to="https://docs.google.com/spreadsheets/d/1ljpUNENKmINkbl3wFy03inDQxYlw76oIe43KYfw664Y/edit?usp=sharing"
        class="sheet-link"
        target="_blank"
    >click here for google sheet version of schedule</ULink>

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
              <img :src="s.icon" alt="Sport" class="sport-icon" />
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
                {{ schedules.length ?? 0 }}
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
              {{ rows().length }} matches
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

        <UCard v-if="rows().length===0" class="text-white">
          <div class="py-10 text-center">No matches for this filter.</div>
        </UCard>

        <UTable
          v-else
          :data="rows()"
          :columns="column"
          class="rounded-lg bg-elevated/50 ring ring-default"
          :ui="{
            th: 'text-white',
            td: 'text-white',
            tr: 'hover:bg-white/5',
            base: 'divide-y divide-white/10'
          }"
        >
          <template #sport-cell="{ row }">
            <div class="flex items-center gap-2">
              <img :src="setIcon(row.original.sport)" alt="Sport" class="sport-icon" />

              <span class="capitalize">{{ row.original.sport }}</span>
            </div>
          </template>
        </UTable>
      </div>
    </div>
  </div>
</template>
