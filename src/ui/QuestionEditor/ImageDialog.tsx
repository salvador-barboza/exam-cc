import React, { Component } from "react";
import { storage } from 'firebase'
import uuid from 'uuid/v4'
import {Background, Popup } from '../ExamMaker/Components'
import {css} from 'emotion'
import { toast } from 'react-toastify';

interface ImageDialogProps {
  onSuccess: (path: string) => void
}


const selectImage = css({
  color: '#6100ED',
  textAlign: 'center',
  width: 438,
  height: 40,
  marginBottom: 10,
  fontSize: 17,
})

const colorButton = css({
  borderColor: '#6100ED',
  borderRadius: 1,
  backgroundColor:'#E7DFFB',
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  color: '#6100ED',
  textAlign: 'center',
  width: 438,
  height: 40,
  marginBottom: 10,
  fontSize: 17,
})

class ImageDialog extends Component<ImageDialogProps> {
  private fileInput = React.createRef<HTMLInputElement>()
  private storageRef = storage().ref().child(`/images/${uuid()}`)

  private onSubmit = async () => {
    toast.info("Estamos procesando la imagen. Al finalizar, el archivo se guardara automaticamente.")
    const file = this.fileInput.current!.files![0]
    const result = await this.storageRef.put(file)
    const url = await result.ref.getDownloadURL()
    this.props.onSuccess(url)
  }

  public render() {
    return (
      <Background>
        <Popup>
          <h1>Selecciona una imagen</h1>
          <input className={selectImage} type="file" ref={this.fileInput}></input>
          <button className={colorButton} onClick={this.onSubmit}>OK</button>
        </Popup>
      </Background>
      )
  }
}

export default ImageDialog
