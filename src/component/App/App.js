import AppHeader from "../AppHeader";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";
import "./App.css";
import PostList from "./../PostList/index";
import PostAddForm from "../PostAddForm";


import React, { PureComponent } from 'react'

export default class App extends PureComponent {

    constructor(){
        super()
        this.state={
            data : [
                {
                  label: "Going to learn React JS",
                  important: true,
                  id:'aa'
                },
                {
                  label: "That is so good",
                  important: false,
                  id:'ab'
                },
                {
                  label: "I need a break ...",
                  important: false,
                  id:'ac'
                }
              ]
            
        }
        this.deleteItem=this.deleteItem.bind(this)
    }

deleteItem(id){
    this.setState(({data})=>{
            const dex=data.findIndex((elem) => elem.id===id);
        
            const before =data.slice(0, dex);
            console.log(before);
            const after=data.slice(dex+1);
            console.log(after);
            const newArr=[...before, ...after]
            console.log(newArr);
            return {
                data :newArr
            }
    
        }       
    )
}

  render() {
    return (
        <div className="App Twit-analog mt-5 p-3">
        <AppHeader />
        <div className="d-flex search-panel">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm />
      </div>
    )
  }
}

