const GRAMMER = {
  function: [
    {
      type: "word",
    },
    {
      type: "operator",
      data: ":",
    },
    {
      type: "word",
      most:types,
      check: 12,
    },
    {
      type: "word",
      require: true,
    },
    {
      type: "operator",
      data: ",",
      check: 0,
    },
    {
      type: "word",
      require: true,
    },
    {
      type: "word",
      require: true,
      loop:12
    },
  ],
};

