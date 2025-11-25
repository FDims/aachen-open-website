import type { Sport } from "../types";

export const getSportName = (sport: Sport) : string => {
  switch (sport) {
    case "badmintonMixedDouble":
      return "Badminton Mixed Doubles";
    case "badmintonMenDouble":
      return "Badminton Men's Doubles";
    case "futsal":
      return "Futsal";
    case "volleyball":
      return "Volleyball";
    case "basketball":
      return "Basketball";
    default:
      return ""
  }
}