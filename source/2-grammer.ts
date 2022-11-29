const GRAMMER = [
  {
    _name:"function",
    structure: [
      { type: "word" },
      { type: "operator", data: ":" },
      { type: "word", most: types, check: 7 },
      { type: "word", require: true },
      { type: "operator", data: ",", check: 0 },
      { type: "word", require: true },
      { type: "word", require: true, loop: 4 },
      { type: "open", require: true, data: "{" },
      { type: "body" },
      { type: "close", require: true, data: "}" },
    ],
  },
  {
    _name:"variable",
    structure: [
      { type: "word", most: types },
      { type: "word", require: true },
    ],
  },
];

