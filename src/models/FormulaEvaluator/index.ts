import { IQuestionVariableMap } from '../Question/QuestionVariableMap';
import Math from 'mathjs'
import RangeVariableGenerator from '../Generators/RangeVariableGenerator';

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
      const gen = new RangeVariableGenerator(descriptor.params)
      varMap[key] = gen.compute()
    }
    
    return varMap
  }
}

export default FormulaEvaluator