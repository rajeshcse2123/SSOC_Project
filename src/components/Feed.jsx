import React from 'react'
import WeTextBox from './WeTextBox'
import './CSS/Feed.css'
import Post from './Post'

const Feed = () => {
  return (
    <div className="feed">
      <WeTextBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed
