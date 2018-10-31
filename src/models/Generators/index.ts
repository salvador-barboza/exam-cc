export enum GeneratorType {
  RANGE
}

export interface VariableGenerator {  
  requiredIterations: number
  compute: () => number[]
  type: GeneratorType
}
