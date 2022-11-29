function parser(input: Array<token>) {
  let length = input.length;
  let index = 0;

  function variable() {
    GRAMMER.forEach((word) => {
      function reader(){
        
      }
      word.structure.forEach((struct) => {
        if (struct.type !== input[index].type) return;
        if ()
      });
    });
  }

  function reader() {
    if (variable()) return true;
    return false;
  }
  while (reader());
}

