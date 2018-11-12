import { IQuestionVariableMap } from '../Question/QuestionVariableMap';
import Math from 'mathjs'
import RangeVariableGenerator from '../Generators/RangeVariableGenerator';
import { VariableGenerator, GeneratorType } from '../Generators';
import ArrayVariableGenerator from '../Generators/ArrayVariableGenerator';

class FormulaEvaluator {
  public computedVariableScope
  public variableValues
  constructor(variableMap: IQuestionVariableMap) {
    this.computedVariableScope = this.parseVariableMap(variableMap)
  }

  public evaluate = (formula: string) => {
    const compiledExpression = Math.parse(formula).compile()
    return compiledExpression.eval(this.computedVariableScope)
  }

  private parseVariableMap = (variableMap: IQuestionVariableMap) => {
    const varMap = {}
    
    for (let i of variableMap.descriptorMap.entries()) {
      const [key, descriptor] = i    
      let gen: VariableGenerator

      switch (descriptor.generator) {
        case GeneratorType.ARRAY:
          gen = new ArrayVariableGenerator(descriptor.params)
          break
        case GeneratorType.RANGE:
          gen = new RangeVariableGenerator(descriptor.params)
          break
      }

      varMap[key] = gen!.compute()            
    }
    
    return varMap
  }
}

export default FormulaEvaluator