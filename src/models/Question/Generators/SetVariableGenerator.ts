import { VariableGenerator } from './index'
import { GeneratorType } from './index';

export interface SetVariableGeneratorParams {
  set: number[],


class SetVariableGenerator implements VariableGenerator {
  constructor(
    public requiredIterations: number,
    private params: RangeVariableGeneratorParams
  ) {}

  type = GeneratorType.SET

  compute = () => {
    const values: number[] = []
    const { params, requiredIterations } = this

    for (let i = 0; i < requiredIterations; i++) {
      const generatedValue = Math.floor(
        Math.random() * params.end) + params.start

      values.push(generatedValue)
    }

    return values
  }
}

export default RangeVariableGenerator
