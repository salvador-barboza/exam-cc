import React from 'react'
import * as ReactDOM from 'react-dom'
import {Page, Inciso} from './Components'
import html2pdf from 'html2pdf.js'

class ExamKeyRenderer {
  constructor(private examsKeys: string[][]) {}
  public render = () => {
    const ph = 
    <Page>
      <h1>Clave de Revisión</h1>
      {this.examsKeys.map((i, index) => (        
        <Inciso>
          <h3>Examen tipo {index+1}</h3>
          <ol>
            {i.map(c => <li>{c}</li>)}
          </ol>
        </Inciso>        
      ))}
    </Page>

    this.save(ph)
  }
  
  private save(node) {
    const el = document.createElement('div')
    ReactDOM.render(node, el)
    html2pdf()
      .set({ 
        pagebreak: { mode: 'avoid-all' }, 
        html2canvas: { logging: false },
        filename: 'clave'
      })
      .from(el)
      .save()
      .then(console.log)
      .catch(console.error)
  }
}

export default ExamKeyRenderer
