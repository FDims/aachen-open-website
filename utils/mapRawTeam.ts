import type {Team} from "../types";

export function mapRawTeam(rawTeams: any[]): Team[] {
    const resultTeams: Team[] = [];
    rawTeams.forEach(rawTeam => {
        const team: Team = {
            id: rawTeam.id,
            name: rawTeam.name,
            sport: rawTeam.sport,
            winCount: rawTeam.win,
            loseCount: rawTeam.lose,
            points: rawTeam.points,
            group: rawTeam.group,
            members: rawTeam.members,
            drawCount: rawTeam.draw,
            goalAgainst: rawTeam.goalAgainst,
            goalFor: rawTeam.goalFor,
            goalDiff: rawTeam.goalDiff,
        }
        resultTeams.push(team);
    })

    return resultTeams;
}