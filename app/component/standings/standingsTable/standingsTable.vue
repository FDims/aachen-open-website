<script setup lang="ts">
  import { Team } from "../../../../types";

  const props = defineProps<{
    groupName: string,
    teams: Team[],
  }>()

  const column: ColumnDef<Team>[] =[
    {
      accessorKey: 'index',
      header: ' ',
      cell: ({ row }) => {
        return row.index + 1;
      }
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'winCount',
      header: 'W',
    },
    {
      accessorKey: 'loseCount',
      header: 'L',
    },
    {
      accessorKey: 'points',
      header: 'Pts',
    },
    ]
</script>

<template>
  <UTable :data="props.teams" :columns="column" class="flex-1" />
</template>

<style scoped>

</style>