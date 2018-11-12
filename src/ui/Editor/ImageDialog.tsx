import React, { Component } from "react";
import { storage } from 'firebase'
import uuid from 'uuid/v4'


interface ImageDialogProps {
  onSuccess: (path: string) => void
}

class ImageDialog extends Component<ImageDialogProps> {
  private fileInput = React.createRef<HTMLInputElement>()
  private storageRef = storage().ref().child(`/images/${uuid()}`)

  private onSubmit = async () => {
    const file = this.fileInput.current!.files![0]
    const result = await this.storageRef.put(file)
    const url = await result.ref.getDownloadURL()
    this.props.onSuccess(url)
  }

  public render() {
    return (
      <div>
        <input type="file" ref={this.fileInput}></input>
        <button onClick={this.onSubmit}>OK</button>
      </div>
      )
  }
}

export default ImageDialog
