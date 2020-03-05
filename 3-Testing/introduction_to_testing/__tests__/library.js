const { square, getItReverse } = require("../library");
describe("check if square and getItReverse works", () => {
  test("check square", () => {
    expect(square(2)).toBe(4);
  }),
    test("check getItReverse", () => {
      expect(getItReverse(2)).toBe(-2);
    });
});
