export type Sport = "badminton" | "futsal" | "basketball" | "volleyball";

export interface Team {
    id: string;
    name: string;
    sport: Sport
    winCount: number;
    loseCount: number;
    points: number;
    group: string;
    members?: string[];
    matches?: Schedule[];
    drawCount?: number;
    goalAgainst?: number;
    goalFor?: number;
    goalDiff?: number;
}

export interface Schedule {
    id: string;
    sport: Sport
    time: Date;
    teamA: Team;
    teamB: Team;
    scoreA: number;
    scoreB: number;
    finished: boolean;
    winnerTeam: string;
}

export interface Group {
    name: string;
    sport: Sport;
    teams: Team[];
}

