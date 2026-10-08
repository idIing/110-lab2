import { boldMessage } from "./animation";

export const snacks: string[] = ["Popcorn",
				 "Pretzels",
				 "Nuts",
				 "Chips",
				 "Beef Jerky",
                                 "Cheez-Its"];

export function printSnacks() {
  boldMessage("Snacks");
  for (const snack of snacks) {
    console.log(snack);
  }
}
