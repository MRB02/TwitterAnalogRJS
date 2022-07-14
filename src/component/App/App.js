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
                  important: false,
                  like: false,
                  id:1
                },
                {
                  label: "That is so good",
                  important: false,
                  like: false,
                  id:2
                },
                {
                  label: "I need a break ...",
                  important: false,
                  like: false,
                  id:3
                }
              ],
              term: '',
              filter: 'All'
              

            
        }
        this.deleteItem=this.deleteItem.bind(this)
        this.AddItem=this.AddItem.bind(this)
        this.onToggleLiked=this.onToggleLiked.bind(this)
        this.onToggleImportant=this.onToggleImportant.bind(this)
        this.onUpdateSearchAtApp=this.onUpdateSearchAtApp.bind(this)
        this.onFilterSelect=this.onFilterSelect.bind(this)
        this.maxId=4
    }


deleteItem(id){
    this.setState(({data})=>{
            const dex=data.findIndex((elem) => elem.id===id);
        
            const before =data.slice(0, dex);

            const after=data.slice(dex+1);
         
            const newArr=[...before, ...after]
           
            return {
                data :newArr
            }
    
        }       
    )
}
AddItem(body){
    const newElem={
        label:body,
        important:false,
        like: false,
        id: this.maxId++
    }

    this.setState(({data})=>{
        const newArr=[...data, newElem]
        return {
            data: newArr
        }
    })
}


onToggleImportant(id){

    this.setState(({data})=>{
   
        const dex=data.findIndex((elem) => elem.id===id);

        const before =data[dex];
        const newItem={...before, important:!before.important}

        const newArr =[...data.slice(0,dex), newItem, ...data.slice(dex+1)]

        return {
            data: newArr
        }


    })


}
onToggleLiked(id){
    this.setState(({data})=>{
   
        const dex=data.findIndex((elem) => elem.id===id);

        const before =data[dex];
        const newItem={...before, like:!before.like}
        const newArr =[...data.slice(0,dex), newItem, ...data.slice(dex+1)]


        return {

            data: newArr
        }
    })

}


searchPost(items , term ){
    if(term.length===0){
        return items
    }

    return items.filter(item => {
        return item.label.indexOf(term)>-1
    })
}

filterPost(items, filter){
    if(filter==='like'){
        return items.filter(item=>item.like)
    }
    else{
        return items
    }
}

onUpdateSearchAtApp(term){

    this.setState({term})

}

onFilterSelect(filter){
this.setState({filter})
}
  render() {
    const {term, data, filter} =this.state
    const Posts = data.length;
    const Liked=data.filter(item => item.like).length;
    const visiblePost = this.filterPost(this.searchPost(data, term), filter)
    return (
        <div className="App Twit-analog mt-5 p-3">
        <AppHeader Posts={Posts} Liked={Liked}/>
        <div className="d-flex search-panel">
          <SearchPanel onUpdateOtherSearch={this.onUpdateSearchAtApp} />
          <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList
        posts={visiblePost}
        onDelete={this.deleteItem}
        onToggleImportant={this.onToggleImportant}
        onToggleLiked={this.onToggleLiked} />
        <PostAddForm onAdd={this.AddItem}/>
      </div>
    )
  }
}

