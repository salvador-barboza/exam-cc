import ArrayVariableGenerator from '../models/Generators/ArrayVariableGenerator';
import { ArrayVariableGeneratorParams } from '../models/Generators/ArrayVariableGenerator';

// class mock implements ArrayVariableGeneratorParams {
//     array: number[] = [1,34,5,6]
// }

const mock: ArrayVariableGeneratorParams = {array: [34,3,2]}


test("test copmute return a value from the array", () => {
    let c = new ArrayVariableGenerator(mock);
    let value = c.compute()
    expect(value === 34 || value === 3 || value === 2).toBeTruthy();
})

const mock2: ArrayVariableGeneratorParams = {array: []}

test("test compute with empy array", () => {
    let c = new ArrayVariableGenerator(mock2);
    expect(c.compute()).toBeUndefined()
})
