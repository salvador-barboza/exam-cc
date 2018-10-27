import { VariableGenerator } from './index'
import { GeneratorType } from './index';

export interface RangeVariableGeneratorParams {
  start: number,
  end: number,
}

class RangeVariableGenerator implements VariableGenerator {
  constructor(
    public requiredIterations: number,
    private params: RangeVariableGeneratorParams
  ) {}

  type = GeneratorType.RANGE

  compute = () => {
    const values: number[] = []
    const { params, requiredIterations } = this

    for (let i = 0; i < requiredIterations; i++) {
      const diference =params.end-params.start
      const generatedValue = Math.floor(
        Math.random() * (diference+1)) + params.start
      
      values.push(generatedValue)
    }

    return values
  }
}

export default RangeVariableGenerator
