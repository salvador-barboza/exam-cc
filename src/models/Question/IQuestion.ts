import { GeneratorType } from './Generators'

export interface IQuestion {
  id: Number
  difficulty: Difficulty
  structure: QuestionStructure
}

export interface QuestionStructure {
  variables: Map<string, VariableDescriptor>
  serializedValue: JSON
}

export interface VariableDescriptor {
  params: any  
  generator: GeneratorType
}

export enum Difficulty {
  LOW,
  NORMAL,
  HIGH,
}
