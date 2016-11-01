import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Modal from 'react-modal'

@inject('store') @observer
export default class Other extends Component {

  constructor(props) {
    super(props)
    this.store = this.props.store
    this.state = {
      modalIsOpen: false
    }
  }

  openModal = () => {
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  render() {
    const store = this.store
    return (
      <div className='page other'>
        <h1>This is an other page</h1>
        <div>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            >
            <h2 ref="subtitle">Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </div>
      </div>
    )
  }

}