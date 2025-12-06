import type {Bracket} from "../types";

export function getStageType(type: Bracket): string {
    switch (type) {
        case "quarter": return "Quarter Final";
        case "semi": return "Semi Final";
        case "final": return "Final";
        case "group": return "Group Stage";
        default:
            return "TBD";
    }
}