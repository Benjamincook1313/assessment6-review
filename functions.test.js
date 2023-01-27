const {shuffleArray} = require('./utils')

const testArr = [1,2,3,4,5,6,7,8,9]

describe('shuffleArray should', () => {
    it("shuffles the testArr ", () => {
        expect(shuffleArray(testArr)).not.toBe(testArr);
    });

    test("return an array of the same length", async () => {
       await expect(shuffleArray(testArr).length).toEqual(testArr.length);
    });
});