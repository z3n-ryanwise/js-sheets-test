import { sheetsJSCreateSheet, sheetsJSReadSheet } from "./src/sheetjs.js";

const rootfilepath = "./output/";
const data = [
  {
    sheetName: "page1",
    headers: ["header1", "header2", "header3"],
    data: [["h1-c1", null, 3], ["h1-c2", null, 6], ["h1-c3", null, 9]],
  },
  {
    sheetName: "page2",
    headers: ["header4", "header5", "header6"],
    data: [["h4-c1", null, 12], ["h4-c2", null, 15], ["h4-c3", null, 18]],
  },
];

// sheetsJS
const filepath = `${rootfilepath}sheetsjs.xlsx`;
sheetsJSCreateSheet(filepath, data);
sheetsJSReadSheet(filepath)
