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

  compute = (): number => {
    const { start, end } = this.params
    const generatedValue = Math.floor(Math.random() * end) + start
    return generatedValue
  }
}

export default RangeVariableGenerator