function sum(numA, numB) {
  return numA + numB;
}

function multiply(numA, numB) {
  return numA * numB;
}

/*
For Learning purpose
====================

function addTwo(a, b) {
  return a + b;
}

function substractTwo(a, b) {
  return a - b;
}

function sayHello(name) {
  return `Hello ${name}`;
}
*/
let res, expected;

// testing framework
function test(message, callback) {
  try {
    callback();
    console.log("✔", message);
  } catch (error) {
    console.error(error);
    console.log("❌", message);
  }
}

// assertion library
function expect(actual) {
  return {
    toEqual: function (expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toBeEqual: function (expected) {
      if (typeof actual !== expected) {
        throw new Error(`${typeof actual} is not equal to ${expected}`);
      }
    },
  };
}

/*
For Learning purpose
====================

function testAdd() {
  res = addTwo(2, 4);
  expected = 6;
  expect(res).toEqual(6);
}

function testSayHello() {
  res = sayHello("manoj");
  expected = "string";
  expect(res).toBeEqual(expected);
}

function testSub() {
  res = substractTwo(20, 4);
  expected = 16;
  expect(16).toEqual(16);
}



test("adding 2 and 4", testAdd);
test("substracting 20 and 4", testSub);
test("pass manoj and expect string", testSayHello);

test("adding 2 + 2 to equal 4", () => {
    expect(addTwo(2,2)).toEqual(4);
});
*/

test("adding 10 + 20 to equal 30", () => {
  expect(30).toEqual(sum(10, 20));
});
test("adding 10 + 20 to equal 30", () => {
  expect(40).toEqual(sum(10, 20));
});
test("adding 5 + 7 to equal 12", () => {
  expect(12).toEqual(sum(5, 7));
});
test("adding 40 + 20 to equal 60", () => {
  expect(60).toEqual(sum(40, 20));
});
test("adding 1000 + 2000 to equal 3000", () => {
  expect(3000).toEqual(sum(1000, 2000));
});




test("multiply 10 * 20 to equal 200", () => {
  expect(200).toEqual(multiply(10, 20));
});
test("multiply 10 * 20 to equal 200", () => {
  expect(400).toEqual(multiply(10, 20));
});
test("multiply 5  * 7 to equal 35", () => {
  expect(35).toEqual(multiply(5, 7));
});
test("multiply 40 * 20 to equal 800", () => {
  expect(800).toEqual(multiply(40, 20));
});
test("multiply 1000 + 200 to equal 200000", () => {
  expect(200000).toEqual(multiply(1000, 200));
});
