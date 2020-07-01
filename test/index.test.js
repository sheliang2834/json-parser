const jsonParser = require("../index");

const obj = {
  bool: true,
  str: "string",
  num: 123,
  func: () => {},
  undefined: undefined,
  null: null,
  arr: [
    "a",
    1,
    undefined,
    null,
    true,
    { a: undefined },
    ["a", 1, undefined, null, true, { a: undefined }],
  ],
  obj: {
    bool: true,
    str: "string",
    num: 123,
    func: () => {},
    undefined: undefined,
    null: null,
  },
  set: new Set("a", "a", "b", "c"),
};

const arr = [obj, obj, obj];

test(`stringify obj to JSON.stringify`, () => {
  expect(jsonParser.stringify(arr)).toBe(JSON.stringify(arr));
});

test(`parse obj to JSON.parse`, () => {
  expect(jsonParser.parse(jsonParser.stringify(arr))).toStrictEqual(
    JSON.parse(JSON.stringify(arr))
  );
});

test(`parse obj to JSON.parse`, () => {
  expect(jsonParser.parse("123")).toBe(JSON.parse("123"));
});
