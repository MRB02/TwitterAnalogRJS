import React, { PureComponent } from 'react'

export default class SearchPanel extends PureComponent {
constructor(props){
  super(props)
  this.state={
    term: ''
  }

  this.onUpdateSearch =this.onUpdateSearch.bind(this)
}
  onUpdateSearch(e){
    const term=e.target.value
    this.setState({term})
    this.props.onUpdateOtherSearch(term)
  }
    render() {
        return ( 
          <input type = "text"
            className = 'form-control search-input my-4 p-3'
            placeholder = 'Search By Posts' 
            onChange={this.onUpdateSearch}
            />
        )
    }
}