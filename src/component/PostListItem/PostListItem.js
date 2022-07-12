import React from 'react'
import './PostListItem.css'

export default class PostListItem extends React.Component{

  constructor(){
    super()
    this.state={
      important:false,
      like:false
    }

    this.onImportant=this.onImportant.bind(this);
    this.onLike=this.onLike.bind(this);
  }

  onImportant(){
    this.setState(({important}) => ({important:!important }))
  }
  onLike(){
    this.setState(({like}) => ({like:!like}))
  }
  render(){
    const {important, like} = this.state;
    
    let classNames='app-list-item d-flex justify-content-between';
    let className1='btn-trash btn-sm';
    if(important){
      classNames +=' important'
    }
    if(like){
      classNames +=' like'
    }
    return(
<li className={classNames} >
        <span className='app-list-item-label' onClick={this.onLike} >{this.props.label}</span>
        <div className='d-flex justify-content-center align-items-center'>
          <button type="button" className='btn-star btn-sm' onClick={this.onImportant}>
            <i className='fa fa-star star'></i>
          </button>
          <button 
          type="button"
          className={className1}
          onClick={this.props.onDelete}
          >
            <i className="fas fa-trash trash1" />
          </button>
            <i className='fas fa-heart heart'></i>
        </div>
</li>
    )
  }
}