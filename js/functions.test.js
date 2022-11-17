import { arrayLength } from './functions.js';

//Testeo la funcción de Length
describe('Given arrayLength funtion', () => {
    let arrayLengthTest;

    describe('When arguments is an array [2,5,10,25]', () => {
        beforeEach(() => {
            arrayLengthTest = [2, 5, 10, 25];
        });
        test('Then result should be 4', () => {
            const expected = 4;
            const result = arrayLength(arrayLengthTest);
            expect(result).toBe(expected);
        });
    });
    describe('When arguments is an array [2,5,10,25,0]', () => {
        beforeEach(() => {
            arrayLengthTest = [2, 5, 10, 25, 0];
        });
        test('Then result should be 5', () => {
            const expected = 5;
            const result = arrayLength(arrayLengthTest);
            expect(result).toBe(expected);
        });
    });
    describe('When arguments is an array [2,pepe,10,null,0,42]', () => {
        beforeEach(() => {
            arrayLengthTest = [2, 'pepe', 10, null, 0, 42];
        });
        test('Then result should be 6', () => {
            const expected = 6;
            const result = arrayLength(arrayLengthTest);
            expect(result).toBe(expected);
        });
    });
    describe('When arguments is an array [NaN, pepe, {}, 1.2, -0, -42]', () => {
        beforeEach(() => {
            arrayLengthTest = [NaN, 'pepe', {}, 1.2, -0, -42];
        });
        test('Then result should be 6', () => {
            const expected = 6;
            const result = arrayLength(arrayLengthTest);
            expect(result).toBe(expected);
        });
    });
    describe('When arguments is an array [undefined, infinity]', () => {
        beforeEach(() => {
            arrayLengthTest = [undefined, Infinity];
        });
        test('Then result should be 2', () => {
            const expected = 2;
            const result = arrayLength(arrayLengthTest);
            expect(result).toBe(expected);
        });
    });
});

describe('Given myPush funtion', () => {
    let arrayToBePush;

    describe('When arguments is an array [2,5,10,25 pepe,] and push 12 ', () => {
        beforeEach(() => {
            arrayToBePush = [2, 5, 10, 25, 'pepe'];
        });
        test('Then result array length should be 6', () => {
            const expected = 6;
            const result = myPush(arrayToBePush, 12);
            expect(result).toBe(expected);
        });
    });
    describe('When arguments is an array [2,5,10,25 pepe,] and push 12', () => {
        beforeEach(() => {
            arrayToBePush = [2, 5, 10, 25, 'pepe'];
        });
        test('Then result elements should be [2, 5, 10, 25, pepe, 12]', () => {
            const expected = console.log([2, 5, 10, 25, 'pepe', 12]);
            const result = console.log(myPush(arrayToBePush, 12));
            expect(result).toBe(expected);
        });
    });
});

describe('Given myUnshift funtion', () => {
    let arrayToBeUnshift;

    describe('When arguments is an array [2, 5, 10, 25, pepe] and unshift 33 ', () => {
        beforeEach(() => {
            arrayToBeUnshift = [2, 5, 10, 25, 'pepe'];
        });
        test('Then result array length should be 6', () => {
            const expected = 6;
            const result = myUnshift(arrayToBeUnshift, 33);
            expect(result).toBe(expected);
        });
    });
    describe('When arguments is an array [2, 5 ,10 ,25 , pepe] and unshift 33', () => {
        beforeEach(() => {
            arrayToBeUnshift = [2, 5, 10, 25, 'pepe'];
        });
        test('Then result elements should be [33, 2, 5, 10, 25, pepe]', () => {
            const expected = console.log([33, 2, 5, 10, 25, 'pepe']);
            const result = console.log(myPush(arrayToBeUnshift, 33));
            expect(result).toBe(expected);
        });
    });
});
