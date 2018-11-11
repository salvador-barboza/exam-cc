export enum GeneratorType {
  RANGE,
  ARRAY
}

export interface VariableGenerator {  
  compute: () => number
  type: GeneratorType
}
