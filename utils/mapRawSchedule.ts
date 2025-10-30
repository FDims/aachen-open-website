import type {Schedule,Team} from "~~/types";

export function mapRawSchedule (rawSchedule: any[], teams: Team[]): Schedule[] {
    const result: Schedule[] = [];
    rawSchedule.forEach(rawSchedule => {
        const schedule: Schedule = {
            id: rawSchedule.id,
            sport: rawSchedule.sport,
            time: new Date(rawSchedule.time),
            teamA: teams.find(team => team.id == rawSchedule.teamA_Id)!,
            teamB: teams.find(team => team.id == rawSchedule.teamB_Id)!,
            scoreA: rawSchedule.teamA_Score,
            scoreB: rawSchedule.teamB_Score,
            finished: rawSchedule.finished == "TRUE",
            winnerTeam: rawSchedule.winnerTeam,
        }
        result.push(schedule);
    })

    return result;
}