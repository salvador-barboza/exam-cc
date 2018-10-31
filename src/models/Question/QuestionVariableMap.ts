import { RangeVariableGeneratorParams } from '../Generators/RangeVariableGenerator'
import { GeneratorType,  } from '../Generators';

export interface VariableDescriptor {
  params: any  
  generator: GeneratorType
}

export interface IQuestionVariableMap {
  variableKeys: string[]
  serialize:() => string
  addRangeVariable: (id: string, params: RangeVariableGeneratorParams) => void
}

class QuestionVariableMap implements IQuestionVariableMap {
  constructor(
    public variableMap = new Map<string, VariableDescriptor>()
  ) {}  
  
  public get variableKeys() {
    return Array.from(this.variableMap.keys())
  }
  
  public serialize = () => {
    return JSON.stringify([...this.variableMap])
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

  static fromJSON(JSONString: string) : QuestionVariableMap {
    return new QuestionVariableMap(
      new Map(JSON.parse(JSONString)))
  }
}

export default QuestionVariableMap