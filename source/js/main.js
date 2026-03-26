import { startTyping } from "./typing.js";

const part1 = document.getElementById("part1");
const part2 = document.getElementById("part2");

const texts = [
  { t1: "Gabriel ", t2: ".dev" },
  { t1: "Gabriel ", t2: ".code" },
  { t1: "Gabriel ", t2: ".build" },
];

startTyping(part1, part2, texts);
