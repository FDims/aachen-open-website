<script setup lang="ts">

import type {Schedule} from "~~/types";
import type {TableColumn} from "#ui/components/Table.vue";
import "~/assets/styles/pages/schedules.scss";
import { getSportName } from "~~/utils/getSportName";


const schedules = inject<Schedule[]>("schedules");

const day1 = new Date(2025, 11, 6);
const day2 = new Date(2025, 11, 7);
const scheduleDay1 = schedules?.filter((schedule) =>
  schedule.actualTime.getDate() == day1.getDate() &&
  schedule.actualTime.getMonth() == day1.getMonth() &&
  schedule.actualTime.getFullYear() == day1.getFullYear()
)
const scheduleDay2 = schedules?.filter((schedule) =>
  schedule.actualTime.getDate() == day2.getDate() &&
  schedule.actualTime.getMonth() == day2.getMonth() &&
  schedule.actualTime.getFullYear() == day2.getFullYear()
)

const column : TableColumn<Schedule>[] = [
    {
      accessorKey: 'scheduled',
      header: ' Scheduled',
      cell: ({ row }) => {
        return new Date(row.getValue('scheduled')).toLocaleTimeString();
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
      cell: ({ row }) => {
        return getSportName(row.getValue("sport"))
      }
    },
    {
      accessorKey: 'actualTime',
      header: 'Actual Time',
      cell: ({ row }) => {
        return new Date(row.getValue('actualTime')).toLocaleTimeString();
      }
    },
  ]

const items = [
  {
    label: "Day 1",
    slot: 'day1',
  },
  {
    label: "Day 2",
    slot: 'day2',
  },
];
</script>

<template>
  <div class="schedule-table">
    <UTabs :items="items" color="neutral" size="xl" class="schedule-table-tabs">
      <template #day1>
        <h1 class="schedule-table-title">Schedule Day 1</h1>
        <UTable
            :data="scheduleDay1"
            :columns="column"
            loading-animation="carousel"
            class=" flex-1 text-xl standings-table-data"
        />
      </template>

      <template #day2>
        <h1 class="schedule-table-title">Schedule Day 2</h1>
        <UTable
            :data="scheduleDay2"
            :columns="column"
            loading-animation="carousel"
            class="flex-1 text-xl standings-table-data rounded-lg bg-elevated/50 ring ring-default"
        />
      </template>

    </UTabs>

  </div>
</template>

<style scoped></style>
