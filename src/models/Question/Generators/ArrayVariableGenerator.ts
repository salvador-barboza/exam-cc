import { VariableGenerator } from './index'
import { GeneratorType } from './index';

export interface ArrayVariableGeneratorParams {
  array: number[],
}

class ArrayVariableGenerator implements VariableGenerator {
  constructor(
    public requiredIterations: number,
    private params: ArrayVariableGeneratorParams
  ) {}

  type = GeneratorType.ARRAY

  compute = () => {
    const values: number[] = []
    const { params, requiredIterations } = this

    for (let i = 0; i < requiredIterations; i++) {
      const generatedPosition=Math.random()*params.array.length
      values.push(params.array[generatedPosition])
    }

    return values
  }
}

export default ArrayVariableGenerator
