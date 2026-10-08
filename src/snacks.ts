import { boldMessage } from "./animation";

const snacks: string[] = ["Popcorn",
                          "Cheez-Its"];

export function printSnacks() {
  boldMessage("Snacks");
  for (const snack of snacks) {
    console.log(snack);
  }
}
