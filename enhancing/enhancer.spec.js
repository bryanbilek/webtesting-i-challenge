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
       const succeededItem = succeed(itemTwo);
        expect((succeededItem.enhancement)).toBe(20);
    });

    it("item enhancement remains 20 if i.enh = 20", () => {
       const succeededItem = succeed(itemOne);
        expect((succeededItem.enhancement)).toBe(20);
    });

    it("item durability = unchanged from suceed", () => {
        const succeededItem = succeed(itemOne);
        expect((succeededItem.durability)).toBe(50);
    });
});

describe("fail", () => {
    it("i.enh < 15 then i.dur decreases by 5", () => {
        const failedItem = fail(itemThree);
        expect((failedItem.durability)).toBe(45);
    });

    it("i.enh >= 15 then i.dur decreases by 10", () => {
       const failedItem = fail(itemFour);
        expect((failedItem.durability)).toBe(40);
    });

    it("i.enh > 16 then i.enh decreases by 1", () => {
       const failedItem = fail(itemFive);
        expect((failedItem.enhancement)).toBe(16);
    });
});

describe("repair", () => {
    it("should output a durability of 100 for any item", () => {
      expect(repair(itemOne).durability).toBe(100);
      expect(repair(itemTwo).durability).toBe(100)
      expect(repair(itemThree).durability).toBe(100);
    });
});