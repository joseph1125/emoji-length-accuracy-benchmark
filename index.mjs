import fs from "fs-extra";
import GraphemeSplitterTester from "./testers/GraphemeSplitter.mjs";
import NativeTester from "./testers/Native.mjs";
import StringZTester from "./testers/Stringz.mjs";

const datasets = [
  {
    name: "Basic Emoji (1816)",
    data: fs.readJSONSync("./data/basic-emoji.json"),
  },
  {
    name: "Color Tone Emoji (1705)",
    data: fs.readJSONSync("./data/color-tone-emoji.json"),
  },
];

const testers = [
  new NativeTester(),
  new StringZTester(),
  new GraphemeSplitterTester(),
];

const result = {};

function performTestOnData(tester, dataset) {
  let correctCount = 0;
  let start = new Date().getTime();
  for (const emoji of dataset.data) {
    if (tester.getLength(emoji) === 1) {
      correctCount++;
    }
  }
  return JSON.stringify({
    correct: correctCount,
    "correct %": ((correctCount / dataset.data.length) * 100).toFixed(3),
    "time (ms)": new Date().getTime() - start,
  });
}

for (const tester of testers) {
  const testerResult = {};
  for (const dataset of datasets) {
    testerResult[dataset.name] = performTestOnData(tester, dataset);
  }
  result[tester.name] = testerResult;
}

console.table(result);
