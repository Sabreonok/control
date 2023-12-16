import React from 'react'
import Post from '../../Components/Post/Post'
export default function Info(props) {
  return (
    <div>{props.arr.map((item, index) => (
        <Post item={item} key={index} />
      ))}</div>
  )
}

