import { boldMessage } from "./animation";

const snacks: string[] = ["Popcorn", "Pretzels", "Nuts"];

export function printSnacks() {
  boldMessage("Snacks");
  for (const snack of snacks) {
    console.log(snack);
  }
}
