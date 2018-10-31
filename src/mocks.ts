import QuestionParser from './serialization/QuestionParser'

const mockVariables = `
  [["x",{"generator":0,"params":{"start":5,"end":6}}],["y",{"generator":0,"params":{"start":0,"end":10}}]]
`
const mockQuestionSchema = `
{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"Cual es el area de esto? si x = ","marks":[]}]},{"object":"inline","type":"variable","data":{"variableTag":"x"},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]},{"object":"text","leaves":[{"object":"leaf","text":" cm y y = ","marks":[]}]},{"object":"inline","type":"variable","data":{"variableTag":"y"},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]},{"object":"text","leaves":[{"object":"leaf","text":"","marks":[]}]}]}]}}
`

const answers = [
  'x',
  'y',
  'x+x',
  'x*y',
  'x^2',
  'y^2',
  'sin(y) + x'
]

const parser = new QuestionParser()
export const mockQuestion = parser.parse(mockQuestionSchema, mockVariables, answers[0])