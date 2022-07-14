import React, { PureComponent } from 'react'

export default class PostStatusFilter extends PureComponent {

  constructor(props){

    super(props);

    this.buttons=[
      {name: 'all', label: 'All'},
      {name: 'like', label: 'Liked'}
    ]
  }


  render() {
    const buttons =this.buttons.map(({name, label}) => {

    const active = this.props.filter === name
    const clazz = active ? 'btn-info p-3 mx-2' : 'btn-outline-secondary p-3 mx-1';
return (
       <button 
       key={name} 
       className={`btn ${clazz}`} 
       type='button'
       onClick={()=>this.props.onFilterSelect(name)}>{label}</button>
)
    })
    return (
      <div className='btn-group d-flex my-4'>
      {buttons}
      </div>
    )
  }
}
