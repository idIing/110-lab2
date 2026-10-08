const snacks: string[] = ["Popcorn", "Pretzels", "Nuts"];

export function printSnacks() {
  console.log("Party's Snacks:")
  for (const snack of snacks) {
    console.log(snack);
  }
}
