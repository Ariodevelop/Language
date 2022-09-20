const REG = {
  SPACE_ONLY: /[^\n\r\S]/,
  WHITE_SPACE: /[^\S]/,
  NEW_LINE: /[\r\n]/,
  START_OF_WORD: /[_a-zA-Z]/,
  PART_OF_WORD: /[_a-zA-Z0-9]/,

  START_OF_NUMBER: /[\.0-9#]/,
  NUMBERS: /[0-9]/,
  HEX: /[0-9a-fA-F]/,
  OPERATOR: /[\*\+\-\.\!\&\%\>\<\?\:]/,
  BLOCK_START: /[\{\[\(]/,
  BLOCK_END: /[\}\]\)]/,
  EXPONENT: /[Ee]/,
};