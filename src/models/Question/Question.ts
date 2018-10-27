import { IQuestion, VariableDescriptor } from "./IQuestion";
import { GeneratorType } from './Generators';
import { RangeVariableGeneratorParams } from './Generators/RangeVariableGenerator';

class Question implements IQuestion {
  public difficulty
  public id
  public structure  

  private variableMap: Map<string, VariableDescriptor> = new Map()

  public get variables() {
    return Array.from(this.variableMap.keys())
  }

  public addRangeVariable = (id: string, params: RangeVariableGeneratorParams) => 
    this.addVariable(id, GeneratorType.RANGE, params)
  
  private addVariable (id: string, generator: GeneratorType, params: object) {
    if (this.variableMap.get(id)) {
      throw Error('Duplicate key entry not allowed')
    }    

    this.variableMap.set(id, {
      generator,
      params
    })
  }
}

export default Question