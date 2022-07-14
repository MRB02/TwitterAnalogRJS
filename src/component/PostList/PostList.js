import React from 'react'
import './PostList.css'
import PostListItem from '../PostListItem';

export default function PostList({posts, onDelete, onToggleImportant, onToggleLiked}) {
  const elements= posts.map((post)=>{
   const {id, ...items}=post
    return(
      <PostListItem {...items}
      key={post.id}  
      onDelete={ () => onDelete(id)}
      onToggleImportant={()=>onToggleImportant(id)}
      onToggleLiked={()=> onToggleLiked(id)} />
  )}
  )

  return (
   <ul className='app-list list-group'>
   {elements}
   </ul>
  )
}
