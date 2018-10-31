import QuestionVariableMap from '../Question/QuestionVariableMap';
import deepcopy from 'deepcopy'
import Math from 'mathjs'
import RangeVariableGenerator from '../Generators/RangeVariableGenerator';

class FormulaEvaluator {
  public computedVariableMap
  constructor(
    public variableMap: QuestionVariableMap
  ) {
    this.computedVariableMap = this.parseVariableMap(variableMap)
  }

  public evaluateFormulas = (formulas: string[] | string) => {
    if (Array.isArray(formulas)) {
      return formulas.map(f => this.computeFormulaValues(f))
    }

    return this.computeFormulaValues(formulas)
  }

  private computeFormulaValues = (formula: string) => {
    const compiledExpression = Math.parse(formula).compile()
    const cop = deepcopy(this.computedVariableMap)
    const exprMap = [] as any[]

    for (let i = 0; i < 5; i++) {
      exprMap.push({})
      for (let k in cop) {
        exprMap[i][k] = cop[k].shift()        
      }
    }

    return exprMap.map(x => compiledExpression.eval(x))
  }

  private parseVariableMap = (variableMap: QuestionVariableMap) => {
    const varMap = {}
    for (let i of variableMap.variableMap.entries()) {    
      const [key, descriptor] = i    
      const gen = new RangeVariableGenerator(5, descriptor.params)
      varMap[key] = gen.compute()
    }
    
    return varMap
  }
}

export default FormulaEvaluator