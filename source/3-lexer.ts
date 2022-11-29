class token {
  type: string;
  data: string;
  end: number;
  start: number;
  constructor(start, end, data, type) {
    this.type = type;
    this.start = start;
    this.end = end;
    this.data = data;
  }
}
function lexer(input: string) {
  let length: number = input.length;
  let index: number = 0;
  let column: number = 1;
  let row: number = 1;
  let char: string = input.charAt(index);
  let next_char = input.charAt(index + 1);

  let tokens: Array<token> = [];

  function end_of_file() {
    return index >= length - 1;
  }
  function add_token(start: number, end: number, type: string) {
    let token = {
      start: start,
      end: end,
      data: input.slice(start, end),
      type: type,
    };
    tokens.push(token);
  }
  function next() {
    index++;
    column++;
    char = input.charAt(index);
    next_char = input.charAt(index + 1);
  }

  function next_line() {
    next();
    column = 1;
    row++;
  }
  function read_line() {
    while (char.match(REG.NEW_LINE)) next_line();
  }

  function read_space() {
    while (char.match(REG.SPACE_ONLY)) next();
  }
  function part_of_word() {
    let start = index;
    do {
      next();
    } while (char.match(REG.PART_OF_WORD));

    add_token(start, index, "identifier");
  }

  function read_keyword(): boolean {
    if (char.match(REG.START_OF_WORD)) {
      part_of_word();
      return true;
    }
  }

  function read_operator() {
    if (char.match(REG.OPERATOR)) {
      add_token(index, index + 1, "operator");
      next();
      return true;
    }
  }
  function read_block() {
    if (char.match(REG.BLOCK_START)) {
      add_token(index, index + 1, "open");
      next();
      return true;
    }

    if (char.match(REG.BLOCK_END)) {
      add_token(index, index + 1, "close");
      next();
      return true;
    }
  }
  function while_number() {
    do {
      next();
    } while (char.match(REG.NUMBERS));
  }

  function read_number() {
    if (!char.match(REG.START_OF_NUMBER)) return false;

    let start = index;

    if (char === "." && next_char.match(REG.NUMBERS)) {
      while_number();

      if (char.match(REG.EXPONENT)) while_number();

      add_token(start, index, "number");
      return true;
    }

    if (char === "#" && next_char.match(REG.NUMBERS)) {
      do {
        next();
      } while (char.match(REG.HEX));

      add_token(start, index, "number");
      return true;
    }

    while_number();
    if (char == ".") while_number();

    add_token(start, index, "number");
    return true;
  }

  function reader(): boolean {
    while (char.match(REG.WHITE_SPACE)) {
      read_space();
      read_line();
    }
    if (read_block()) return true;
    if (read_keyword()) return true;
    if (read_number()) return true;
    if (read_operator()) return true;

    return false;
  }

  while (reader() && !end_of_file());

  if (end_of_file()) return tokens;

  unexpected_character(row, column, char);
  return tokens;
}

