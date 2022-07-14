import React, { PureComponent } from 'react'

export default class PostAddForm extends PureComponent {

  constructor(){
    super()
    this.state ={
      text: ''
    }
    this.onInputValue =this.onInputValue.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }

  onInputValue(e){
    this.setState({
      text: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    this.props.onAdd(this.state.text)

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form className='bottom-panel d-flex' onSubmit={this.onSubmit}>
        <input type="text" 
        placeholder='what are you thinking about?'
        className='form-control new-post-label my-2'
        onChange={this.onInputValue}
        value={this.state.text   }
        />
        <button 
        type='button' 
        className='btn btn-secondary px-3 m-2'
        onClick={this.onSubmit}>Add post</button>
    </form>
    )
  }
}