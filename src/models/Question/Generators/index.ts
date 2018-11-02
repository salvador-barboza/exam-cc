export enum GeneratorType {
  RANGE,
  ARRAY
}

export interface VariableGenerator {
  requiredIterations: number
  compute: () => number[]
  type: GeneratorType
}
