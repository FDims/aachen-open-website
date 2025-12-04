import type {Schedule,Team} from "~~/types";

export function mapRawSchedule (rawSchedule: any[], teams: Team[]): Schedule[] {
    const result: Schedule[] = [];
    rawSchedule.forEach(rawSchedule => {
        if(rawSchedule.id !== undefined && rawSchedule.id !== '') {
            const schedule: Schedule = {
                id: rawSchedule.id,
                sport: rawSchedule.sport,
                scheduled: new Date(rawSchedule.scheduled),
                actualTime: new Date(rawSchedule.actualTime ? rawSchedule.actualTime : rawSchedule.scheduled),
                type: rawSchedule.type,
                teamA: teams.find(team => team.id == rawSchedule.teamA_Id),
                teamB: teams.find(team => team.id == rawSchedule.teamB_Id),
                scoreA: rawSchedule.teamA_Score,
                scoreB: rawSchedule.teamB_Score,
                finished: rawSchedule.finished == "TRUE",
                winnerTeam: rawSchedule.winner_team,
                court: rawSchedule.court||"TBD",
            }
            result.push(schedule);
        }
    })

    return result;
}