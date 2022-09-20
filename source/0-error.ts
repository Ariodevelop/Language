function unexpected_character(column: number, row: number, character: string) {
  const message = "character";
  console.log(
    `
    Unexpected ${message} : '${character}'
    column : ${column},
    row : ${row}
    `,
  );
}

