const {succeed, fail , repair , get} = require('./enhancer.js');

//test items
const itemOne = { 
    durability: 50,
    enhancement: 20
}
const itemTwo = { 
    durability: 50,
    enhancement: 19
}
const itemThree = { 
    durability: 50,
    enhancement: 14
}
const itemFour = { 
    durability: 50,
    enhancement: 17
}

describe("repair", () => {
  it("should output a durability of 100 for any item", () => {
    expect(repair(itemOne.durability)).toBe(100);
    expect(repair(itemTwo.durability)).toBe(100);
    expect(repair(itemThree.durability)).toBe(100);
  });
});