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
    const { array } = this.params 
    const generatedPosition = Math.floor(Math.random() * array.length)
    
    return array[generatedPosition]
  }
}

export default ArrayVariableGenerator
