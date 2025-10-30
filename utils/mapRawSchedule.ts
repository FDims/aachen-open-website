import type {Schedule} from "~~/types";

export function mapRawSchedule (rawSchedule: any[]): Schedule[] {
    const result: Schedule[] = [];
    rawSchedule.forEach(rawSchedule => {
        const schedule: Schedule = {
            id: rawSchedule.id,
            sport: rawSchedule.sport,
            time: rawSchedule.time,
            teamA: rawSchedule.teamA,
            teamB: rawSchedule.teamB,
            scoreA: rawSchedule.scoreA,
            scoreB: rawSchedule.scoreB,
            finished: rawSchedule.finished,
            winnerTeam: rawSchedule.winnerTeam,
        }
        result.push(schedule);
    })

    return result;
}