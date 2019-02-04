import ArrayVariableGenerator from '../models/Generators/ArrayVariableGenerator';
import { ArrayVariableGeneratorParams } from '../models/Generators/ArrayVariableGenerator';

test("test compute function is defined", () => {
    const mockParams: ArrayVariableGeneratorParams = {array: [2]}
    const arrayVarGen = new ArrayVariableGenerator(mockParams);
    expect(arrayVarGen.compute()).toBeDefined()
})

test("test copmute return a value from the array", () => {
    const mockParams: ArrayVariableGeneratorParams = {array: [34,3,2]}
    const arrayVarGen = new ArrayVariableGenerator(mockParams);
    let value = arrayVarGen.compute()
    expect(value === 34 || value === 3 || value === 2).toBeTruthy();
})

test("test compute with empy array", () => {
    const mockParams: ArrayVariableGeneratorParams = {array: []}
    const arrayVarGen = new ArrayVariableGenerator(mockParams);
    expect(arrayVarGen.compute()).toBeUndefined()
})
