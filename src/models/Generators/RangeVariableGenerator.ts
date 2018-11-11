import { VariableGenerator } from './index'
import { GeneratorType } from './index';

export interface RangeVariableGeneratorParams {
  start: number,
  end: number,
}

class RangeVariableGenerator implements VariableGenerator {
  constructor(
    private params: RangeVariableGeneratorParams
  ) {}

  type = GeneratorType.RANGE

  compute = () => {
    const { params } = this
    const diference =params.end-params.start

    return Math.floor(
        Math.random() * (diference+1)) + params.start
  }
}

export default RangeVariableGenerator
