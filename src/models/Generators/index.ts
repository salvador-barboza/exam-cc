export enum GeneratorType {
  RANGE
}

export interface VariableGenerator {  
  compute: () => number
  type: GeneratorType
}
