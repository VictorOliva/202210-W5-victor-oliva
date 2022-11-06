import { add } from './functions.js';

describe('Given add funtion', () => {
    let value1;
    let value2;
    describe('When arguments are 2 and 5', () => {
        beforeEach(() => {
            value1 = 2;
            value2 = 5;
        });
        test('Then result should be 7', () => {
            const expected = 7;
            const result = add(value1, value2);
            expect(result).toBe(expected);
        });
    });
    describe('When arguments are 3 and 3', () => {
        beforeEach(() => {
            value1 = 3;
            value2 = 3;
        });
        test('Then result should be 6', () => {
            const expected = 6;
            const result = add(value1, value2);
            expect(result).toBe(expected);
        });
    });
});
