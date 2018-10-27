export enum GeneratorType {
  RANGE
  SET
}

export interface VariableGenerator {
  requiredIterations: number
  compute: () => number[]
  type: GeneratorType
}
