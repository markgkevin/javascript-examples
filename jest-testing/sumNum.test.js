const sumNUm = require("./sumNum");

test("add 1 + 2 to equal 3", () => {
  // string that show up on the console
  expect(sumNUm(1, 2)).toBe(3); // expect(function(arguement)).toBe(expectedResult) is jest default function
});
