import { VariableGenerator } from './index'
import { GeneratorType } from './index';

export interface ArrayVariableGeneratorParams {
  array: number[],
}

class ArrayVariableGenerator implements VariableGenerator {
  constructor(
    private params: ArrayVariableGeneratorParams
  ) {}

  type = GeneratorType.ARRAY

  compute = () => {
    const { params } = this    
    const generatedPosition=Math.random()*params.array.length
    
    return params.array[generatedPosition]
  }
}

export default ArrayVariableGenerator
