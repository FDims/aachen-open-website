<script setup lang="ts">
import type {Group, Team} from "~~/types";
  import "./standingsTable.scss";
  import type {TableColumn} from "#ui/components/Table.vue";

  const props = defineProps<{
    group: Group;
  }>();

  const sortedTeam = props.group.teams.sort((a,b) => {
    if (a.points === b.points ) {
      return b.goalDiff - a.goalDiff;
    }
    return b.points - a.points;
  });

  const column = () : TableColumn<Team>[] => {
    if(props.group.sport === "futsal") {
      return([
        {
          accessorKey: 'index',
          header: "Rank",
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
          accessorKey: 'drawCount',
          header: 'D'
        },
        {
          accessorKey: 'loseCount',
          header: 'L',
        },
        {
          accessorKey: 'goalAgainst',
          header: 'GA',
        },
        {
          accessorKey: 'goalFor',
          header: 'GF',
        },
        {
          accessorKey: 'goalDiff',
          header: 'GD',
        },
        {
          accessorKey: 'points',
          header: 'Pts',
        },
      ])
    } else {
      return([
        {
          accessorKey: 'index',
          header: "Rank",
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
      ])
    }

  }
</script>

<template>
  <div class="standings-table">
    <h1 class="standings-table-title">Group {{props.group.name}}</h1>
    <UTable
        :data="sortedTeam"
        :columns="column()"
        loading-animation="carousel"
        class="flex-1 text-xl standings-table-data"
    />
  </div>

</template>

<style scoped>

</style>