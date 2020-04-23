const { succeed, fail , repair } = require('./enhancer.js');

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
    enhancement: 15
}

const itemFive = {
    durability: 50,
    enhancement: 17
}

describe("succeed", () => {
    it("item enhancement increases by 1 when i.enh < 20", () => {
        succeed(itemTwo);
        expect((itemTwo.enhancement)).toBe(20);
    });

    it("item enhancement remains 20 if i.enh = 20", () => {
        succeed(itemOne);
        expect((itemOne.enhancement)).toBe(20);
    });

    it("item durability = unchanged from suceed", () => {
        succeed(itemOne);
        expect((itemOne.durability)).toBe(50);
    });
});

describe("fail", () => {
    it("i.enh < 15 then i.dur decreases by 5", () => {
        fail(itemThree);
        expect((itemThree.durability)).toBe(45);
    });

    it("i.enh >= 15 then i.dur decreases by 10", () => {
        fail(itemFour);
        expect((itemFour.durability)).toBe(40);
    });

    it("i.enh > 16 then i.enh decreases by 1", () => {
        fail(itemFive);
        expect((itemFive.enhancement)).toBe(16);
    });
});

describe("repair", () => {
    it("should output a durability of 100 for any item", () => {
      expect(repair(itemOne.durability)).toBe(100);
      expect(repair(itemTwo.durability)).toBe(100);
      expect(repair(itemThree.durability)).toBe(100);
    });
});