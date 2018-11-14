import React from 'react'
import styled from 'react-emotion'
import * as ReactDOM from 'react-dom'
import html2pdf from 'html2pdf.js'

const Page = styled('body')({
  padding: 64,
  backgroundColor: '#FFF',
  color: '#000'
})

const Inciso = styled('section')({
})

// const Title = styled('h1')({

// })

class ExamKeyRenderer {
  constructor(private examsKeys: string[][]) {}
  public render = () => {
    const ph = 
    <Page>
      {this.examsKeys.map((i, index) => (
        <Inciso>
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
