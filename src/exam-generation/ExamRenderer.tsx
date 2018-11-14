import React from 'react'
import { BlockTypes } from "../ui/QuestionEditor/BlockTypes"
import Html from 'slate-html-serializer'
import { ExamInciso } from '../exam-generation'
import styled from 'react-emotion'
import * as ReactDOM from 'react-dom'
import html2pdf from 'html2pdf.js'
import MultipleChoiceAnswer from '../exam-generation/MultipleChoiceAnswer';
import SingleAnswer from './SingleAnswer';


const Page = styled('body')({
  padding: 64,
  backgroundColor: '#FFF',
  color: '#000'
})

const Inciso = styled('section')({
})

const Title = styled('h1')({

})

class ExamRender {
  constructor(private incisos: ExamInciso[]) {}
  public render = (filename: string) => {
    const ph = 
    <Page>
      {this.incisos.map((i, index) => (
        <Inciso>
          <Title>{index+1})</Title>
          <div 
            dangerouslySetInnerHTML={{
              __html: this.serialize(i.variables, i.questionStructure)
            }}
          />
          <div>
            {i.choices.length <= 1
              ? <SingleAnswer />
              : <MultipleChoiceAnswer answers={i.choices} />}
          </div>
        </Inciso>        
      ))}
    </Page>

    this.save(ph, filename)
  }
  
  private save(node, filename) {
    const el = document.createElement('div')
    ReactDOM.render(node, el)
    html2pdf()
      .set({ 
        pagebreak: { mode: 'avoid-all' }, 
        html2canvas: { logging: false, useCORS: true },
        filename 
      })
      .from(el)
      .save()
      .then(console.log)
      .catch(console.error)
  }

  private serialize  = (variables, structure) => {
    const serializer = new Html({ rules: this.rules(variables) })
    return serializer.serialize(structure)
  }
  
  private rules = (variables) => ([
    {   
      serialize: (obj, children) => {
        if (obj.object == 'block') {
          switch (obj.type) {            
            case 'paragraph':
              return <span className={obj.data.get('className')}>{children}</span>            
            
            case 'image':
              return <img 
                style={{height: 200, display: 'block' }} 
                src={obj.data.get('url')} />
          }
        } else {
          switch(obj.type) {
            case BlockTypes.VARIABLE:
            return (
              <span>
                  {variables[obj.data.get('variableTag')]}
              </span>
            )
          }
        }       
        return null
      },
    }
  ])

}

export default ExamRender
