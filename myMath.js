const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};

// ES5
// default export - gantshan zvil export hiideg
module.exports = add;

// named export
module.exports = { sub };
