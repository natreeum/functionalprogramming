const { go, log, takeAll, take } = require("./modules");
const L = require("./Lazy");

const users = [
  {
    name: "a",
    age: 21,
    family: [
      { name: "a1", age: 53 },
      { name: "a2", age: 47 },
      { name: "a3", age: 16 },
      { name: "a4", age: 15 },
    ],
  },
  {
    name: "b",
    age: 24,
    family: [
      { name: "b1", age: 58 },
      { name: "b2", age: 51 },
      { name: "b3", age: 19 },
      { name: "b4", age: 22 },
    ],
  },
  {
    name: "c",
    age: 31,
    family: [
      { name: "c1", age: 64 },
      { name: "c2", age: 62 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
  {
    name: "d",
    age: 20,
    family: [
      { name: "d1", age: 42 },
      { name: "d2", age: 42 },
      { name: "d3", age: 11 },
      { name: "d4", age: 7 },
    ],
  },
];

console.time("iterable");
go(
  users,
  L.map((u) => u.family),
  L.flatten,
  L.filter((u) => u.age < 20),
  L.map((u) => u.name),
  takeAll,
  log
);
console.timeEnd("iterable");

console.time("프로토타입");
const res = users
  .map((e) => e.family)
  .flat()
  .filter((e) => e.age < 20)
  .map((e) => e.name);

const result = [];
for (let i = 0; i < 3; i++) {
  result.push(res[i]);
}
log(result);
console.timeEnd("프로토타입");
