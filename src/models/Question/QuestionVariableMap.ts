import { RangeVariableGeneratorParams } from '../Generators/RangeVariableGenerator'
import { GeneratorType,  } from '../Generators';

export interface VariableDescriptor {
  params: any  
  generator: GeneratorType
}

export interface IQuestionVariableMap {
  descriptorMap: Map<string, VariableDescriptor>
  variableKeys: string[]
  serialize:() => string
  addVariable: (id: string, generator: GeneratorType, params: RangeVariableGeneratorParams) => void  
}

class QuestionVariableMap implements IQuestionVariableMap {
  constructor(
    public descriptorMap = new Map<string, VariableDescriptor>()
  ) {}  
  
  public get variableKeys() {
    return Array.from(this.descriptorMap.keys())
  }
  
  public serialize = () => {
    return JSON.stringify([...this.descriptorMap])
  }

  public addVariable (id: string, generator: GeneratorType, params: object) {
    if (this.descriptorMap.get(id)) {
      throw Error('Duplicate key entry not allowed')
    }    

    this.descriptorMap.set(id, {
      generator,
      params
    })
  }

  static fromJSON(JSONString: string) : QuestionVariableMap {
    return new QuestionVariableMap(
      new Map(JSON.parse(JSONString)))
  }
}

export default QuestionVariableMap