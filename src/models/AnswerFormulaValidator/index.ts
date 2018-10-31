import { MathNode, parse } from "mathjs"

class AnswerFormulaValidator {
  public extractSymbolIdentifiers = (expressionTree: MathNode) => 
    Array.from(new Set(expressionTree
      .filter((node) => node.isSymbolNode)
      .map(symbol => symbol.name)))
  
  public checkFormulaValitidy = (formula: string, availableIdentifiers: string[]) => {
    try {
      const res = parse(formula)    
      const extractedSymbols = this.extractSymbolIdentifiers(res)    
  
      for (let i of extractedSymbols) {      
        if (!i || availableIdentifiers.indexOf(i) === -1) {
          return false
        }
      }
    } catch(err) {
      return false
    }
    
    return true
  }  
}

export default AnswerFormulaValidator
