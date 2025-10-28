export type Sport = "badminton" | "futsal" | "basketball" | "volleyball";

export interface Team {
    id: string;
    name: string;
    sport: Sport
    winCount: number;
    loseCount: number;
    points: number;
    members?: string[];
    matches?: Schedule[];
    drawCount?: number;
    goalAway?: number;
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
}

export interface Group {
    id: string;
    sport: Sport;
    teams: Team[];
}

